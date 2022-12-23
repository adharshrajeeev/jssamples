function* name(x){
   yield x;
   yield x*2;
   yield x*3;
}

var add=name(10);
console.log(add.next())
console.log(add.next())
console.log(add.next())