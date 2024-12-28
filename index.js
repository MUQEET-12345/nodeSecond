import mongoose from "mongoose"
import express from "express"

const app = express()

app.get("/",(req, res)=>{
    res.send("hello from server")
})

app.get("/login",(req, res)=>{
    res.send("login")
})
app.get("/signup",(req, res)=>{
    res.send("signup")
})


app.listen(8000, ()=>{
    console.log(`File is runing on port ${8000}`);
    
})