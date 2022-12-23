var http=require('http')
const fs=require('fs')
const path=require('path')

const server=http.createServer((req,res,next)=>{
   res.write("hey")
   res.end();
})


const PORT=process.env.PORT || 3000;


server.listen(PORT,()=>console.log("Server running in "+PORT))