// var a = 10;
// console.log(a);
// a = "summer";
// console.log(a);
// console.log('type of ' + a + " is " +typeof a);
// a = true;
// console.log('type of :' + a + ' is: ' + typeof a);
// a = false;
// console.log('type of :' + a + ' is: ' + typeof a);
// a = 1;
// while(a <= 10){
//     console.log(a + "type of a is: " + typeof a);
//     a++;
// }
// a = 45.53;
// console.log(typeof a);
// console.log(a + ` is ` + typeof a + ` type`);
var num = 200;
console.log(`half of ` + num +` is: ` + num/2);
console.log(`halt of ${num} is ${num/2}`);


// var keyword
var a = 2333;
console.log(a);
var a = "ram";      // it working fine because var support reinitilize as well as redeclearation
console.log(a);
// let keyword

let l = 100;
console.log(l);
// let l = "babloo"; 
// getting error--> syntax error< l has been be already decleared
// console.log(l);

// we can reinitilize but can't redecleared
l = "babloo";
console.log(l);

// const keyword
const i = 3;
console.log(i);
// i = 4;           it can't reinitilize and redeclearation //getting error


// loops and condition in loop
num = 10;
for(let i = 0; i <= num; i++){
    if(i % 2 == 0){
        console.log(i + ` is even number`);
    } else{
        console.log(i + ` is odd number`);
    }
}