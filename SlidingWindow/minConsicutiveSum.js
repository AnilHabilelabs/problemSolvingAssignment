const arr = [2, 3, -2, -4, 6, 7, 8, 1];


const minConsicutiveSumOn2 = (arr, k) => {
    let length = arr.length;
    let MinSum = 0;
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        MinSum += arr[i];
        currentSum += arr[i];
    }
    for (let i = k; i < length; i++) {
        currentSum += arr[i] - arr[i - k];
        if (MinSum > currentSum) {
            MinSum = currentSum;
        }

    }
    return MinSum;
}
let minSum = minConsicutiveSumOn2(arr, 3);
console.log(minSum);