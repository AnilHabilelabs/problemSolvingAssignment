const toHex = str => {
    let length = str.length;
    let hexStr = "";
    for (let i = 0; i < length; i++) {
        hexStr += (str[i] + '' + parseInt(Math.random() * 100) + str.charCodeAt(i) + Math.round(Math.random() * 100)).toString(16);
    }
    return hexStr;
}

console.log(toHex("nil"));