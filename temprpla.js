function show(){
  
    var x=5;
    function inner(){
        console.log(x);
        var y=50;
        function inner2(){
            console.log(y);
        }
        inner2();
    }
    inner();
}

show();