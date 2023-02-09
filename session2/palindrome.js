let str = "rotoar";
let palindrome = str => {
    let first = 0;
    let last = str.length - 1;
    let result = true;
    while (first < last) {
        if (str[first] !== str[last]) {
            result = false;
        }
        first++;
        last--;
    }
    return result;
}
console.log(palindrome(str));