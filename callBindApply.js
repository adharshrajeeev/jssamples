let name1={
    firstName:"Akshay",
    lastName:"Saini", 
   
}

let printDetails= function(homeTown,state){
    console.log(this.firstName+""+this.lastName+""+homeTown+""+state);
}

printDetails.call(name1,"kerala","india");


let name2={
    firstName:"Sachin",
    lastName:"Tendulkar"
}

printDetails.call(name2,"Kochi","INDIA") ///////call method 



printDetails.apply(name2,["irelend","soudi"])  ////apply method

/////bind method

let printMyname=printDetails.bind(name2,"kolkata","india");
