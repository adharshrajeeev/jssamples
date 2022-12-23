function* add(num1,num2){
    yield num1+num2;
    yield num1-num2;
    yield num1*num2;

}

var ans=add(20,10);

console.log(ans.next());
console.log(ans.next());
console.log(ans.next());

