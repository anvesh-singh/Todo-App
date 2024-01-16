const express=require("express");
const PORT=3000;
const {create_todo,update_todo}=require("../types");
const app=express();
app.use(express.json());

app.get(("/todos"),(req,res)=>{

});

app.post("/todos",(req,res)=>{
    const createpayload=req.body;
    const parsepayload=create_todo.safeParse(createpayload);
    if(!parsepayload){
        res.status(411).json({
            msg:"error wrong input"
        })
        return;
    }
});

app.put("/completed",(req,res)=>{
    const updatpayload=req.body;
    const parsepayload=update_todo.safeParse(updateapayload);
    if(!parsepayload){
        res.status(411).json({
            msg:"error wrong input"
        })
        return;  
    }
})
app.listen(PORT,()=>{
    console.log("server is listening on port 3000");
});