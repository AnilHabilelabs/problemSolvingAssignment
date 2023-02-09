const notUnique = [1, 3, 4, 1, 5, 7, 1, 2, 2, 2];

let getUniqueArr = arr => {
    let len = arr.length;
    let resArray = [];
    for (let i = 0; i < len; i++) {
        let count = 0;
        for (let j = 0; j < resArray.length; j++) {
            if (arr[i] === resArray[j]) {
                count++;
            }
        }
        if (count === 0) resArray.push(arr[i])
    }
    return resArray;
}
console.log(getUniqueArr(notUnique));

