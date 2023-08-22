//require express
const express=require('express');


//require port
const port=5000;

//require mongoose
const mongoose=require('mongoose');

const app=express();

//connect my app to mongodb database
mongoose.connect("mongodb://127.0.0.1:27017/RestApi",{useNewUrlparser:true,
useUnifiedTopology:true}).then(function(){
    console.log(`mongodb is connected`);

}).catch((err)=>{
    console.log(err);

})

//listen to app
app.listen(port,(err)=>{
    if(err){
        console.log("problem in running in the server");
    }
    console.log(`server is running on port ${port}`);
})