const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://anveshsingh444:Anveshsingh01@cluster0.9hupwlq.mongodb.net/new_project_Todo-App");

const schema=mongoose.Schema({
    title:String,
    discription:String,
    completed:boolean
})

const todo=mongoose.model("Todos",schema);

module.exports = {
    todo
}