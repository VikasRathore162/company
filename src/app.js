const express = require("express");
require("./db/conn");

const Student = require("./models/user");




const app = express();
const port = process.env.PORT || 5001;
app.use(express.json());

app.get("/users",async (req,res)=>{

    try{
        const allStudentData = await Student.find();
        res.send(allStudentData); 

    }
    catch(e){
        res.status(400).send(e);
    }

})

app.get("/users/:userid/",async (req,res)=>{

    try{
        const uid = req.params.userid;
        const StudentData = await Student.find({_id:uid});
        res.send(StudentData); 

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

