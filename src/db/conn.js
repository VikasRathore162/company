const mongoose = require('mongoose');
const validator=require('validator');
mongoose.connect("mongodb+srv://VikasRathour:vikas123@cluster0.k1tqu.mongodb.net/userdb?retryWrites=true&w=majority",{ useUnifiedTopology: true,useNewUrlParser: true ,useCreateIndex:true , useFindAndModify:false});
mongoose.connection
.once('open',()=>console.log("connected")
)
.on('error',(error)=>{
    console.log(error);
    

})