// 3types of function

//Normal function

// function defination
// function function_Name(parameter1, paramerere2,...){
//     // do something
// }

// function invoke
// function_Name(arg1, arg2,...)

// function are treated as first class citizen in java script

// function add(a, b){
//     return a+b;
// }
// let ans = add(2,8);
// console.log(ans);

// calculater

/*
function calculater(str,a, b){
    if(str == `add`){
        return a + b;
    } else if(str == `sub`){
        return a - b;
    } else if (str == `multiply`){
        return a * b;
    } else if(str == `div`){
        return a / b;
    } 
    // else if(str == `lcm`){
    //     let d = a * b;
    //     let x = d / a;
    //     let y = d / b;
    //     let n = x + y;
    //     return function(){
    //         let gcd = 1;
    //         let j = Math.min(n, d);
    //         for(let i = 1; i <= j; i++){
    //             if(n%i == 0 && d % i == 0){
    //                 gcd = i;
    //             }
    //         }
    //         n = n / gcd;
    //         d = d/ gcd;
    //         console.log("lcm : " + n + '/' +d);
    //     }
    // }
}
let addition = calculater(`add`, 3,5);
console.log(`addition of 3 and 5 is ${addition}`);
let substraction = calculater('sub', 9, 5);
console.log(`substraction of 9, 5 is ${substraction}`);
let multiplication = calculater('multiply', 3,5);
console.log(`multiplication of 3, 5 is${multiplication}`);
let division = calculater('div', 124, 4);
console.log(`vidision of 124 and 4 is ${division}`);
// let longestCommonFactor = calculater('lcm', 4,6);
// longestCommonFactor();



function calculater(input, a, b){
    if(input == 'add'){
       return function add(){
        console.log(a + b);
       }
    }else if (input == 'sub'){
        return a - b;
    }
}
let returnFun = calculater('add', 4, 6);
console.log("return function is :\n" + returnFun);
returnFun();
*/

/* function expression:-> in function expression we can return whole function */
/*
let funExpression = function expression(){
    console.log("hello guy's i'm function expression");
}
funExpression();

function abcd(){
    console.log("hello guy's i'm function expression");
}
console.log(" "+ abcd);
abcd();
*/


// IIFE:-->> Immediate Invoke Function Expression

let addFunction = (function(a, b){
    return a+b;
    // console.log(a+b);
})(33,44);
console.log(addFunction);