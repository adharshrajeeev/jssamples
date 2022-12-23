const recordVideo=new Promise((resolve,reject)=>{
    resolve("VIDEO 1 RECORDED")
})

const recordVideoTwo=new Promise((resolve,reject)=>{
    resolve("VIDEO 1 RECORDED")
})
const recordVideoThree=new Promise((resolve,reject)=>{
    resolve("VIDEO 1 RECORDED")
})

Promise.all([recordVideo,recordVideoTwo,recordVideoThree]).then((message)=>{
    console.log(message);
})
Promise.race([recordVideo,recordVideoTwo,recordVideoThree]).then((message)=>{
    console.log(message);
})
Promise.allSettled([recordVideo,recordVideoTwo,recordVideoThree]).then((message)=>{
    console.log(message);
})