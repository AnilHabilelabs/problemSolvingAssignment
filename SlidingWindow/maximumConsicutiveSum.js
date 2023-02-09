const arr = [2, 3, -2, -4, 6, 7, 8, 1];


const maxConsicutiveSumOn2 = (arr, k) => {
    try {
        let length = arr.length;
        let sum = Number.MIN_VALUE;
        for (let i = 0; i < length - k + 1; i++) {
            let SubArraySum = Number.MIN_VALUE;;
            for (let j = 0; j < k; j++) {
                SubArraySum += arr[i + j];
            }
            if (SubArraySum > sum) sum = SubArraySum;
        }
        return sum;
    } catch (error) {
        console.log(error);
    }
}
let maxSum = maxConsicutiveSumOn2(arr, 3);
console.log(maxSum);

const minConsicutiveSumO1 = (arr, k) => {
    let length = arr.length;
    let Sum = 0;
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        Sum += arr[i];
        currentSum += arr[i];
    }
    // currentSum = JSON.parse(JSON.stringify(maxSum));
    for (let j = k; j < length; j++) {
        currentSum += arr[j] - arr[j - k];
        if (Sum < currentSum) {
            Sum = currentSum;
        }
    }
    return Sum;
}

console.log(minConsicutiveSumO1(arr, 3));