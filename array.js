// Array->it is collection of elements

let car=["AUDI", 'BMW', 'MG', 1, 2, 3, true, 34.54];
// in a array we can store diffent types of data and their values
console.log(car);
console.table(car);

// accessing the element of the array
console.log(car[0]);
console.log(car[3]);

// repalcing a element in array
car[3] = 'Mahindra';
console.log(car[3]);
car[car.length] = "Honda";
console.log(car);


// methods in an array
// 1.pop() = it removes the last element of the given array
console.log(car);
car.pop();
console.log(car);

// 2.push() = it insert an elemnet in the last index of the given array
car.push( "TATA");
console.log(car);

// 3.unshift()= it add element at the starting of the given array
car.unshift("BablooTach");
console.log(car);

// 4.shift() = it remove the element at the first of the given array
car.shift();
console.log(car);

// 2d array
let Array2d = [
    [1,2,3],
    ['Name', "RollNo", "Subject"],
    ['Babloo', 11, "Science"],
    ["Akash", 43, "Hindi"]
]
console.table(Array2d);
console.log(`length of 2d array: ` + Array2d.length); // to find how many rows in a 2d array
console.log(`elements present in 0th index: ` + Array2d[0].length);   // to find how many elements present in a row
console.log("this is 2d array one element " + Array2d[3][0]);
let arr = ['babloo', 'ramesh', 44, 34.32, true];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
