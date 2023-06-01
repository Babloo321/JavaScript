    let obj={
    add:function add(a,b){
        return a + b;
    },
    sub:function substract(a,b){
        return a - b;
    },
    hello:123
    }
console.log(`calling add function: ${obj.add(44,22)}`);
// console.log("print in temp: " + obj);
    module.exports = obj;