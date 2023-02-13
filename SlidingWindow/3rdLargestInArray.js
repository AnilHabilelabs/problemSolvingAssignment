let arr = [1, 2, 3, 4, 5, 6, 6, 6, 8];

const getThirdLargest = arr => {
    arr.sort((a, b) => b - a);
    console.log(arr);
    let ThirdLargest = null;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            console.log(arr[i] !== arr[i - 1]);
            count++;
            if (count === 3) {
                ThirdLargest = arr[i];
                break;
            }
        }
    }
    return ThirdLargest;
}
console.log(getThirdLargest(arr));