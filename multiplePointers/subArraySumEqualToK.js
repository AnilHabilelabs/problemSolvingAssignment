// problem statement
// you have array of integers
// [1,2,3,4,5,6,7]
// you have a no N = 11;
// find a sum of 2 no in a array equal to N;
// if exists return true else false



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let k = 11;

const len = arr.length - 1;

const sumOfTwoNumberInArray = (arr, k) => {
    let f_index = 0;
    let l_index = arr.length - 1;
    for (let i = 0; i <= len; i++) {
        if (arr[f_index] + arr[l_index] < k) {
            f_index++;
        }
        else if (arr[f_index] + arr[l_index] > k) {
            l_index--;
        }
        else if (arr[f_index] + arr[l_index] === k) {
            return 1;
        }
    }
    return 0;
}

let result = sumOfTwoNumberInArray(arr, 5);
console.log(result);