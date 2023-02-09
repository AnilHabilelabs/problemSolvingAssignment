// 4, take all the zeros to the right of the array [0,1,0,2] - > [1,2,0,0];

const zerosToRights = arr => {
    let length = arr.length;
    let count = 0;
    for (let i = 0; i < length; i++) {
        if (arr[i] != 0) {
            arr[count] = arr[i];
            count++;
        }
    }
    while (count < length) {
        arr[count] = 0;
        count++;
    }
    return arr;
}
let arr4 = [1, 2, 0, 4, 5, 0, 4, 0, 5, 0, 7, 0, 0, 5];

console.log(zerosToRights(arr4));