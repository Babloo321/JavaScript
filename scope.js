// var a = 9;
// {
//     var a = -9;
// }
// let b = a;
// {
//     let b = -98;
// }
// console.log(b);
function outer(){
        inner();
        function inner(){
            console.log(b);
        }
    }
    var b = 10;
    outer();
    console.log(`value of b: ${b}`);