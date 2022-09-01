const express =  require("express");
const mongoose = require("mongoose");
const app = express()
mongoose.connect(
    "mongodb://localhost:27017/demo",() => 
    console.log("db Connected................"));

app.get("/",(req,res)=>{
res.send("hello world")

})
app.listen(9090,()=>{
  console.log("server working")  
})