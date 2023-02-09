let n = 12345;
// let sum =0;
// while(n>0){
//     sum+=Math.floor(n%10);
//     n/=10;
// }
// console.log(sum);

// let str = "anil";

// console.log(str => str);

// const names = ["sameer","om","parth","mahal"].includes("om");
// console.log(names);

const string = "name=sameer;city=jaipur";

function toobj(string){
    return string.split(';');
}

let arr = toobj(string);
console.log(arr);