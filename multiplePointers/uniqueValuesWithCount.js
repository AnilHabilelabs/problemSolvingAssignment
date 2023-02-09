let arr = [0, 0, 1, 2, 4, 5, 0, 0, 4, 5, 7, 5];
const counter = (arr) => {
    let uniques = {};
    for (let i = 0; i < arr.length; i++) {
        if (uniques[arr[i]]) {
            uniques[arr[i]] = ++uniques[arr[i]];
        } else {
            uniques[arr[i]] = 1;
        }
    }
    return uniques;
};
console.log(counter(arr));
