const express=require("express");
const PORT=3000;
const app=express();
app.use(express.json());
app.get("/",()=>{

});
app.listen(PORT,()=>{
    console.log("server is listening on port 3000");
});