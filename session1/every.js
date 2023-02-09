// the every() method tests whether all elements in the array pass the test implemented by the provoded function
const check = currentValue=>currentValue<40;
const array1 = [1,30,12,31,39];
console.log(array1.every(check));