const express = require("express");
const mongoose=require("mongoose");
const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

mongoose.connect("mongodb://localhost:27017/EmplyoeeDB",{
    useNewUrlParser:true,useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("successfully connected")
    }
})
app.listen(3000,()=>{
    console.log("on port 3000")
})
app.get('/',function(req,res){
    res.render('pages/home');
});