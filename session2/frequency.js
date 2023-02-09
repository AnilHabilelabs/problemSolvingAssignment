let str = "hexagoooonaaal";

const counter = str => {
    let uniques = {};
    let count ;
    for (let i = 0; i < str.length; i++) {
        if (uniques[str[i]]) {
            uniques[str[i]] = ++count;
        }
        else {
            count=1
            uniques[str[i]] = count
        }
    }
    return uniques;
}
let result = counter(str);
console.log(result);