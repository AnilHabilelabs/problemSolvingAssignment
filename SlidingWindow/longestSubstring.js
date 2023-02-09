let string = "habilelabas";

const longestSubString = str => {
    try {
        let longestDistinctStr = "";
        let checkStr = "";
        let length = str.length;
        for (let i = 0; i < length; i++) {
            if (!checkStr.includes(str[i])) {
                checkStr += str[i];
            }
            else {
                if (checkStr.length > longestDistinctStr.length) {
                    longestDistinctStr = checkStr;
                }
                checkStr = "";
            }
        }
        return longestDistinctStr;
    } catch (error) {
        console.log(error);
    }
}
console.log(longestSubString(string));
