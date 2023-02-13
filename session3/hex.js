function convertFromHex(hex) {
    var hex = hex.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function convertToHex(str) {
    var hex = '';
    for (var i = 0; i < str.length; i++) {
        hex += '' + str.charCodeAt(i).toString(16);
    }
    return hex;
}
console.log(convertToHex("AnilKarela"));
console.log(convertToHex("AnilKarela"));
// console.log(convertFromHex("416e696c4b6172656c61"));
// console.log("a".charCodeAt().toString(2));