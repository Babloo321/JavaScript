// let str = "hello good morning \"My name is Babloo\".";
// console.log(str);

// let string = 'hello good morning "My name is Babloo';
// console.log(string);

// console.log("length of the string " + string.length);
// console.log("length of the string " + string["length"]);



/*******************************************OBJECTS***************************************** 
 * Objects consist of properties and methods in key:value pairs
*/
// 1.properties(two way to access properties i.dot notation, ii. square bracket notation)
// let len = string.length;        dot notation
// let size = string["length"];    square bracket notation
// 2.methods()


let obj = {
    name:"Babloo",
    age:24,
    education:"graduation",
    address:"areraj Khajuriya",
    contact: 9990932902,
    income:3352453
};
console.log(obj);
// to access particular value use properties dot notation
console.log(obj.name);

let captainAmerica = {
    firstName : "Steve",
    lastName : "Roger",
    friends: ["Bukkey", "Tony Stark", 'Brue Banner'],
    age : 324,
    address : {
        state: "Manhata",
        city : "New York",
        country : "America"
    },
    sayHi: function(){
        console.log(`My name is ${this.firstName}`);
    }
};
console.log(captainAmerica);
console.log(captainAmerica.address.country);
captainAmerica.sayHi();

// loop on object
for(let i in captainAmerica){
    console.log(`${i} : ${captainAmerica[i]}`);
    if(captainAmerica[i] === "address"){
       for(let key in address){
        console.log(`${captainAmerica[key]} : ${captainAmerica.address[key]}`);
       }
    }
}
