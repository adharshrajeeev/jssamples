// let promise=new Promise((resolve,reject)=>{
//     let a =1+1;
//     if(a==2){
//         resolve("yes it 2")
//     }else{
//         reject("oh no")
//     }
// })

// promise.then((message)=>{
//     console.log("this is in the then "+message)
// }).catch((message)=>{
//     console.log("this is in catch"+message)
// })

//any method for promise
function additon(){
    return new  Promise((resolve,reject)=>{
        let a=1+2;
        if(a==2){
            resolve("YES THIS NUMBER IS EVEN")
        }else{
            reject("OH NO THIS NUMBER IS ODD")
        }
    })
}

additon().then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})