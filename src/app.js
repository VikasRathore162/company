const express = require("express");
require("./db/conn");
const User = require("./models/user");
const app = express();
const port = process.env.PORT || 5001;
app.use(express.json());

app.get("/users",async (req,res)=>{
    try{
        const alluserData = await User.find();
        res.send(alluserData); 

    }
    catch(e){
        // res.status(400).send(e);
        console.log(e);
    }

})

app.get("/users/:userid/",async (req,res)=>{

    try{
        const uid = req.params.userid;
        const userData = await user.find({_id:uid});
        res.send(userData); 

    }
    catch(e){
        res.status(400).send(e);
    }

})







// starting the server

app.listen(port,()=>{
    console.log(`Connected to server at port no ${port}`);
    
})

// college details

