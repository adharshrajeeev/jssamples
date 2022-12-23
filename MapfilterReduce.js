const arr=[5,2,8,9,10];

//MAP -DPUBLE

const output=arr.map((x)=>{
   return x*2
})

console.log(output); ///map method

///////////////////////////////////

const secondOutput=arr.filter((x)=>{
    return x%2==0;
})

console.log(secondOutput); ///FILTER FUCTION


///////////////////////////////

const thirdOutput=arr.reduce((x,sum)=>{
    return sum=sum+x;
})

console.log(thirdOutput);///reduce function