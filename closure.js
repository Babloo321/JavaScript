function outer(){
    var a = 33;
    function inner(){
        console.log(a);
    }
    inner();
}
outer()