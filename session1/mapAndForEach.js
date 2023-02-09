// 2 the foreach loop returns "undefined".
// the map () method returns the newly created array according to the provided callback function 

const array = [1,2,3,4,5];
console.log(array);
const correctForEach = array.forEach((element,index)=> { 
    array[index]=element*element;
})
console.log(array);
