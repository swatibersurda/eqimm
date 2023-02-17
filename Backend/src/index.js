const express=require("express");
const app=express();
const cors=require("cors")
const connect=require("./Config/db");
const addRouter=require("./Controller/addController")
app.use(express.json());
app.use(cors());

app.use("/",addRouter)


app.listen(5000,async()=>{
    try{
      await connect();
      console.log("connecting db on 5000")
    }catch(err){
        console.log("err msg")
    }
})





