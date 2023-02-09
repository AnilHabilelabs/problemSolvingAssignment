// 2.remove nth Element given by user in an array
// const removeNumInArray = (arr,num)=>arr.filter((Element)=>Element!=num);
const removeNumInArray = (arr, num) => {
    let length = arr.length;
    let newArr = [];
    let count = 0;
    for (let i = 0; i < length; i++) {
        if (arr[i] !== num) {
            newArr[count] = arr[i];
            count++;
        }
    }
    return newArr;
}
console.log(removeNumInArray(arr, 4));