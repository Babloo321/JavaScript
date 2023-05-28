/*
let carArr = ['Maruti', 'Suzuki', "Desire", "Hondai", 'Mahindra', 'Audi', 'Tata'];
for(let i = 0; i < carArr.length; i++){
    console.table(`Index: ${i} Value: ${carArr[i]}`);
}
let car = {
    0:"Maruti",
    1:"Suzuki",
    2:"Desire",
    3:"Hondai",
    4:"Mahindra",
    5:"Audi",
    6:"Tata"
};
for(let key in car){ 
    console.table(`Key: ${key} Value: ${car[key]}`)
}

*/

/*
let car = {     // every object have their own reserved keyword {this}
    name:"Ferrari",
    model:2023,
    mileg:"3km",
    speed:"240km/hr",
    sayHi:function(){
        console.log(`Car name is: ${this.name}`);
        console.log(`Car name is: ${car["name"]}`);
        console.log(`Car name is: ${car.name}`);
    }
}
car.sayHi();
console.log(car.name);
console.log(car["name"]);
*/
/*
var a = 34;
let b = 33;
const c = 44;
console.log(`a: ${a}, b: ${b}, c: ${c}`);
// let arr = ["Babloo", 344, 342.32, true, "Tuktuk", 'Naina'];
// for(let i = 0; i < arr.length; i++){
//     console.log(`index: ${i} -> value: ${arr[i]}`);
// }
// methods in string
let arr = ["Babloo"];
// push method->it inserted the element at the last of the string
arr.push("Kumar");
console.log(arr);
// pop method-->it deleted the last element from the string
arr.pop();
console.log(arr);
// unshift method-->it inserted the element at the begining of the string
arr.unshift("My name");
console.log(arr);
// shift method-->it deleted the element at the begining of the string
arr.shift();
console.log(arr);
*/
//functions
// normal function
/*
function add(a, b){
    return a+b;
}
let ans = add(3, 5);
console.log(`sum of 3 and 5 is: ${ans}`);

// function expression
let sayHi = function(input, a, b){
    if(input == 'add'){
        console.log(`addition of ${a} and ${b} is: ${a + b}`);
    } else if(input == 'sub'){
        console.log(`substraction of ${a} and ${b} is: ${a - b}`);
    } else if(input == 'mul'){
        console.log(`multiplication of ${a} and ${b} is: ${a * b}`);
    }
}
sayHi("add", 4, 5);
sayHi('sub', 5, 3);
sayHi('mul', 5, 4);

// IIFE-> Imediate Invoke Function Expression
let output = function(input, a, b){
    if(input == 'add'){
        console.log(`addition of ${a} and ${b} is: ${a + b}`);
    } else if(input == 'sub'){
        console.log(`substraction of ${a} and ${b} is: ${a - b}`);
    } else if(input == 'mul'){
        console.log(`multiplication of ${a} and ${b} is: ${a * b}`);
    }
    output('mul', 5,6);
}
*/
/*
// string in js
var x = "hello good morning \"My name is babloo\".";
console.log(x);

// concatination of two string
let str1 = "Belive";
let str2 = " in yourself";
let concateStr = str1 + str2;
console.log(concateStr);

//slice method in string
let sliceStr = concateStr.slice(0, 7) // it include first argunment and exclude last argunment
console.log(` sliced string is: ${sliceStr}`);

// substr method in string
let subStr = concateStr.substr(0, 6);
console.log(`substring of ${concateStr} is: ${subStr} 0 upto 6 length`);

let newstr = "                               Hello                  good morning                        ";
// let trimStr = newstr.trim();
console.log(` original string is: ${newstr} and the trimed string is: ${newstr.trim()}`);

// toUpperCase method
console.log(`to use toUpperCase method in js: ${concateStr.toUpperCase()}`);
// toLowerCase
console.log(`to use toLowerCase method in js: ${concateStr.toLowerCase()}`);

*/


// object in js
let obj = {
    name: "Babloo",
    age: 24,
    education: "B-Tech",
    address:{
        home: "Areraj",
        city: "Motihari",
        ward: 3,
        village: "Khajuriya"
    },
    friends: ["Pawan", 'Sanjeev', "Vishal", 'Rajan'],
    sayHi:function(){
        console.log("Hello\nGood Morning \"My name is Babloo Kumar\".");
        console.log(`My name is: ${this.name}`);
    }
};
console.log(obj);

for(let i in obj){
    console.table(`Key: ${i} Value: ${obj[i]}`);
}
obj.sayHi();