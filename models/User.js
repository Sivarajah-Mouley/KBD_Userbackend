const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordcomplexity= require('joi-password-complexity')

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: String, 
  },
  {
    timestamps: true,
  },
)

userSchema.methods.generateAuthToken = function()
{
    const token= jwt.sign({_id: this._id},process.env.JWTPRIVATEKEY,{expiresIn: '100d'})
    return token
};


const User = mongoose.model("user", userSchema);

const validate =(data) => {

    const schema = joi.object({
        email : joi.string().required().label("email"),
        password: passwordcomplexity().required().label("password"),
        fullname: joi.string().required().label("fullname"),
    });
    return schema.validate(data)
}
module.exports = {User, validate}
