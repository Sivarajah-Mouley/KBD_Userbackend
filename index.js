require("dotenv").config();
const express= require('express');
const app=express();
const cors =require("cors")
const connection =require("./db")
const userRoutes =require("./routes/users");
const authRoutes =require("./routes/auth");
const suggestionRoutes = require('./routes/suggestionRoutes');
//database connection
connection();

//middlewares
app.use(expree.json())
app.use(cors());

//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use('/api', suggestionRoutes);


const port =process.env.PORT|| 3000;
app.listen(port, () => console.log('listening on port $(port)...'))