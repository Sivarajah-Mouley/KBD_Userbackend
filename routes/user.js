const router = require("express").Router();
const {user,validate}=require("./models/user");
const bcrypt=require("bcrypt");

router.post("/",async(req,res)=>{
    try{

    const{error} = validare(req,body);
    if(error)
    return res.status(400).send({message: error.details[0].message});

    const user=await User.findOne({email:req.body.email})
    if(user)
    return res.status(409).send("User with this email address is already exist");

    const salt=await bcrypt.genSalt(Number(process.env.SALT));
    const hashpassword =await bcrypt.hash(req.body.password,salt);

    await new User({...req.body,password: hashpassword}).save();
    res.status(201).send({message: "user created successfully"})
    }catch(error)
    {
        res.status(500).send({message: "Internal server error"})
    }
})


module.exports = router
