const mongoose = require('mongoose');
const validator=require('validator');
const userSchema = new mongoose.Schema({
    
    
    name:{
        type:String
    },
    username:{
        type:String
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
        "street":{
            type:String
        },
       "suite":{
           type:String
       },
       "city":{
           type:String
       },
       "zipcode":{
           type:String
       }

    }
   
   
   
   



})






const User = new mongoose.model("userlist",userSchema);

module.exports = User;