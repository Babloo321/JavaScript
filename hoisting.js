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

// function outer(){
//     inner();
//     function inner(){
//         console.log(b);
//     }
// }
// var b = 10;
// outer();
// console.log(`value of b: ${b}`);

// numberVariable = 33;
// console.log(numberVariable);
// var numberVariable;
// funName();
// function funName(){
//     console.log(333);
// }

// function doSomething(){
//     x = 3324;
//     console.log(x);
//     var x;
// }
// doSomething();

var a = 10;
{
    var a = -10;
}
let b = a;
{
    let b = -20;
}

console.log(b)