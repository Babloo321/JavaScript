// let randomVariable = {name: "Limda"};
// randomVariable = 3;
// if(typeof randomVariable === "string"){
//     console.log("it is not a string");
// } else{
//     console.log("it is type of string");
// }

// const user = {
//     email: "babloocse888@gmail.com",
//     updatedEmail: function (email){
//         this.email = email;
//     }
// }
// user.updatedEmail("newemail.com");
// console.log(user.email);

// let a = 33;
// console.log(typeof a);

// const fruit = ['🍌', '🍎', '🍓', '🍒', '🥭'];
// fruit.slice(0,1);       //['🍎', '🍓', '🍒', '🥭'];
// // fruit.splice(0,1);
// fruit.shift();
// fruit.unshift('🍑');    // ['🍑', '🍎', '🍓', '🍒', '🥭'];
// console.log(fruit);     //  ['🍑', '🍎', '🍓', '🍒', '🥭'];

// var emoji = ['🍎', '🍓', '🍒'];
// emoji = [...emoji, 'babloo'];
// console.log(emoji);

// const add = function(x){
//     return x + x;
// }
// function myfun(num = 2, value = add(num)){
//     console.log(num, value);
// }
// myfun();
// myfun(3);
// var person = {
//     name: "Layda mariyam",
//     address:{
//         city:"Bangkok"
//     }
// }
// console.log(person);
// person.name = "Babloo Kumar";
// console.log(person);
// Object.freeze(person);      // it freezed at level 1 (freeze it's immideate property)
// console.log("aftere freezing our object is");
// console.log(person);
// person.name = "Maira";
// console.log(person);
// person.address.city = "Bangkok 101 street";
// console.log(person);


// const person = {
//     name: "Babloo",
//     address:{
//         city:"Areraj"
//     }
// }
// Object.freeze(person);
// person.name = "vikash";     // can't modify it value because freeze can not modified value at level 1
// person.address.city = "Areraj Khajuriya";
// console.log(person);
// Object.assign(person, {age:33});        // can't work
// console.log(person);


// const person = {
//     name: "Babloo",
//     address:{
//         home:"Areraj"
//     }
// }
// Object.seal(person);            // it can modifed value can't add delete the value
// console.log(person);
// person.name = "Bablo Kumar";
// console.log(person);
// delete person.name;
// console.log(person);
// delete person.address;
// console.log(person);
// delete person.address.home;
// console.log(person);
// // Object.assign(person, {age:33});
// console.log(person);


// let randomVariable = 22;

// function getInfo(){
//     console.log(typeof randomVariable);
//     var randomVariable = "My name is lakhan";
//     console.log(randomVariable);
// }
// getInfo();

// const grocery = ['banana', 'papaya','apple','grapes'];
// if(grocery.indexOf('papaya')){
//     console.log('we have to buy banana');
// } else{
//     console.log('we dont have to buy banana');
// }

// optional chaning
// const person = {
//     first_Name:"Babloo",
//     last_Name: "Kumar",
//     pet:{
//         name:'rockey',
//         bread:'Dutch tulip hunda'
//     },
//     getFulName(){
//         return `${this.first_Name} ${this.last_Name}`;
//     }
// };
// console.log(`pet name: ${person.pet.name}`);
// let fullname = person.getFulName();
// person.getFulName();
// console.log(`${fullname} person full name ${person.getFulName()}`);

// let a = 1;
// const b = ['😊','🤗','😣','🫡','🙏'];
// console.log(b[a+=1]);

// function sumValues(x,y,z){
//     return x + y + z;
// }
// sumValues([...1,2,3]);
// sumValues([...[1,2,3]]);
// sumValues(...[1,2,3]);
// sumValues([1,2,3]);

// const configColor={
//     red:true,
//     black:false,
//     green:true,
//     blue:true,
//     yellow: false
// };
// const color=['pink', 'red', 'blue'];
// console.log(color[1]);
// console.log(configColor.color[1]);


// const person={
//     name: "madhuri",
//     age: 24
// }

// for(const [x, y] of Object.entries(person)){
//     console.log(x, y);
// }

// const dangrous={
//     first:"fire",
//     second:"wind",
//     third:"water",
//     fourth:"girlfriend"
// }

// for(const [a,b] of Object.entries(dangrous)){
//     console.log(a,b);
// }

// function checkAge(age){
//     
//     if(age < 18){
//         const message = `Sorry! You'r too young`
//     }else{
//         const message = `Yeah! You'r age is enough`
//     }
//     return message;
// }
// console.log(checkAge(32));

var num = 3;
var num = 33;
console.log(num);