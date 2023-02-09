// console.log(add(5,6));
// function add(num1,num2) {
//     return (num1+num2);
// }

// // console.log(sum(5,4));
// const sum = function(a,b){
//     return a+b;
// }
// console.log(sum(5,2));

// console.log(add(3,4));

// const calSub = (a,b)=> a-b;
// console.log(calSub(6,5));

function sameer(a){
    console.log("-------------1-------------");
    // return a
    return function(b){
        console.log("-------------2-------------");
        return a+b;
    }
}
console.log(sameer(4));
const data = sameer(4);
// const data = sameer(4)(20);
console.log("final result : ",data(20));