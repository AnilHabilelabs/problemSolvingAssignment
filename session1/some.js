// some return boolean value always
const num = [3,14,18];
console.log(num.some(check));
function check(num){
    return num>18;
}