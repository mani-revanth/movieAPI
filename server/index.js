import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import https from 'https';
import axios from 'axios';


const app=express();
app.use(express.json());
app.use(cors());

const CONNECTION_URL="mongodb+srv://revanth:vizag2003@cluster0.ymsjcqd.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL,(err)=>{
    if(err)
    console.log(err);
})

const user=mongoose.Schema({
    firstName:String,
    lastName:String,
    mail:String,
    password:String,
})


const user_model=new mongoose.model("user_model",user);

app.post("/signup",(req,res)=>{
    console.log('hello');
    user_model.find({mail:`${req.body.mail}`},(err,users)=>{
        if(err)
        console.log(err);
        else
        {
            var data="yes";
            if(user.length)
            data="no";
            else
            {
                const x=new user_model(req.body);
                x.save().then(()=>{
                    res.send(data);
                })
            }
        }
    })
})


app.post("/signin",(req,res)=>{
    //console.log(req.body);
    user_model.find({mail:req.body.mail,password:req.body.password},(err,user)=>{
        if(err)
        console.log(err);
        else
        {
        let data="no";
        if(user)
        data=user[0];
        res.send(data);
        }
    })
})

app.post("/buy_ticket",(req,res)=>{
    const ticket=new tickets_model(req.body);
    ticket.save();
})


app.get("/get_details",(req,response)=>{
    const url="https://api.tvmaze.com/search/shows?q=all";
    axios.get(url).then((res)=>{
        //console.log(res.data);
        response.send(res.data);
    }).catch((err)=>{
        console.log(err);
    })
})



app.listen(5000,()=>{
    console.log("server running");
})