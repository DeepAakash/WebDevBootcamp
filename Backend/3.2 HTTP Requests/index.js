import express from "express";

const app=express();
const port=3000;

app.get("/", (req, res)=>{
    res.send("Hi, I am Aakash");
})

app.get("/contact", (req, res)=>{
    res.send("<h1>Contact me on:</h1> <br><p>aakashsinghkarnaal@gmail.com</p>");
})

app.get("/about", (req, res)=>{
    res.send("I am a Software Engineer");
})

app.listen(port, ()=>{
    console.log(`Yo from ${port}`);
})