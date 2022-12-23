var a=50;
var b=a;
a=100;

console.log(a);
console.log(b);  //CALL BY VALUE




/////call by reference


var objectOne={name1:"ADOPE"};
console.log(objectOne);

var objectTwo=objectOne;
var objectThree=objectTwo;
console.log(objectTwo);

objectTwo.name1="FIGMA";
objectThree.name1="PHOTOSHOP"

console.log(objectOne);
console.log(objectTwo);