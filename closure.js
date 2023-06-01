// function outer(){
//     var a = 33;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer()

// function with their lexical local value forms closure

// lexical : their parent's value and parent's local value is lexical value

function outer(){
    var a = 7;
    function inner(){
        console.log(a);
    }
    return inner;
    a = 99;
}
var output = outer();
console.log(output());