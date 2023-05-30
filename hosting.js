// let x = 4;
// function great(){
//     console.log("Hello guys");
// }
// console.log(x);
// great();

// console.log("Second question");
// console.log(a);     // undefined
// greatt();           // 
// let a = 33;
// function greatt(){
//     console.log("Hello guys");
// }


// console.log(x);
// great();
// var x = 2;
// function great(){
//     console.log("hello requireter");
// }

function outer(){
    inner();
    function inner(){
        console.log(b);
    }
}
var b = 10;
outer();
console.log(`value of b: ${b}`);