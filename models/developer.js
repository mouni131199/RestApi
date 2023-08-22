const mongoose=require('mongoose');

//create a schema for developers
const developerSchema=new mongoose.Schema({
    name:{
        type : String
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    technology : {
        type : String,
        required : true
    },
    employeed : {
        type : Boolean,
        default : false
    }
},{timestamps : true});

module.exports = mongoose.model("developer",developerSchema);