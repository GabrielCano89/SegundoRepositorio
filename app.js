const express= require("express");
const app= express();

const path = require("path");
const dotenv = require('dotenv').config();

const publicPath = path.resolve(__dirname, "./public");
app.use (express.static(publicPath)); 

app.listen(process.env.PORT,  () => {
    console.log('servidor corriendo en el puerto' + process.env.PORT + "http://localhost:" + process.env.PORT)
});

app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});