const getProfitLoss = (arr, Buy, Sell) => {
    let length = arr.length;
    if ((Buy >= 0 && Buy < length) && (Sell >= 0 && Sell < length)) {
        return (arr[Sell] - arr[Buy]);
    }
    return false;
}
const arr = [3, 2, 1, -4, 5, 3, -7];
console.log(getProfitLoss(arr, 2, 4));