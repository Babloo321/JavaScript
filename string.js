// string is sequence of characters

var str = "my name is babloo kumar";
console.log(str);
console.log(str[0]);

console.log(`length of the string: ` + str.length);

// methods in string
// 1.extraction method in string
// slice method:-> it cut and save the starting index(inclusive) to ending index(exclusive)
let sliceString = str.slice(3, 12);
console.log(sliceString);
console.log(str);

var slicestr = str.slice(3) // starting at 3rd index and ending up last index
console.log(slicestr);
var slicestr = str.slice(2, -4);   //(2, 23-4) // starting at 2nd index and ending going minus 4 index
                    // 2 se start hoga and str.length - 4 pe end hoga
console.log(slicestr);


// substring method
// it take two argunment 1(start),2(length)
let ans = str.substr(3, 6);
console.log("substring: " + ans);
console.log(str);

str = "good morning";
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());


// concatenation of string 9    (to combine two string in a one single string)
let firstString = "Belive in ";
let secondString = "Yourself";
let concetenatedString = firstString + secondString;
console.log(concetenatedString);

let concateStr = firstString.concat(secondString + " and me");
console.log(concateStr);

// trim method is used to remove all white spaces begining and ending spaces not between the string
let trimStr = "                              hello             i am boy                  ";
console.log(trimStr);
console.log(trimStr.trim());
