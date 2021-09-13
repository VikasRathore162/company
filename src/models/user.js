
// student schema
const mongoose = require('mongoose');
const validator=require('validator');
const userSchema = new mongoose.Schema({
    
    
    name:{
        type:String,
        required:false,
        lowercase:true,
        trim:true,
        

    },
    username:{
        type:String,
        required:false,
        lowercase:true,
        trim:true,
        

    },
    
    email:{
        type:String,
        required:false,
        unique:[true,"Email id already present"],
        trim:true,
        default:'',
        validate(value){
            if(value != ""){
                if(!validator.isEmail(value)){
                    throw new Error("invalid email")
    
                }
            }
        }
    },
   
   
   
    address:{
        type:String,
        required:false,
        lowercase:true,
        trim:true,
        default:""

    }
   
   
   
   



})






const User = new mongoose.model("userlist",userSchema);

module.exports = User;