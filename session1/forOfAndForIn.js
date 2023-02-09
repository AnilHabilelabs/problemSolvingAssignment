// for of does not work with objects but for in works


// for in 
// the for in statement iterate over all enumarable properties of and object that are keyed by strings(ignoring )
const string = "anil";
for(alphabet of string){ //initials
    console.log(alphabet);
}

for(alphabet in string){ //indexes
    console.log(alphabet);
}

const dataa = {
    name:"anil",
    id:"HL0227",
}
// for(key of dataa){ // not iterable
//     console.log(key);
// }
for(key in dataa){
    console.log(key,dataa[key]);
}
