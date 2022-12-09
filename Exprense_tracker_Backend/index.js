const express=require("express");
const app=express();
const PORT=5005;
const conn=require("./db");
const cors=require('cors');

//fronted output show 
app.use(cors());

//Middalewere function
app.use(express.json());

//Import Router
app.use("/record",require("./Router/record"));

//listen method 
app.listen(PORT,()=>{
    console.log("Contected server");
});


//database connection
conn.connection.on("connected",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connection to MongoDB");
    }
});

