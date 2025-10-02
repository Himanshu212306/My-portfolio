const express=require("express");
const path = require("path");
const app=express();
const port=5000;
app.get("/",(req,res)=>{
    res.send("helllo word")
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"profile.html"))

});
app.listen(port,()=>{
    console.log(`server is 5000 http://localhost:${port}`);
}); 
