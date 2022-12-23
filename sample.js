const express=require('express')
const app=express();


app.get('/about',Token,(req,res)=>{
    console.log("user logged in");
    res.send("<h1>SUCESS</h1>")
});

function Token(req,res,next){ 
  console.log("Ceating token")
  next();
}

const PORT=process.env.PORT ||3000;

app.listen(PORT);