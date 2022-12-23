let promise=new Promise((resolve,reject)=>{
    let a =1+1;
    if(a==2){
        resolve("yes it 2")
    }else{
        reject("oh no")
    }
})

promise.then((message)=>{
    console.log("this is in the then "+message)
}).catch((message)=>{
    console.log("this is in catch"+message)
})