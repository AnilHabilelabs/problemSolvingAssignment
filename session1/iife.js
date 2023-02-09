(function (str){
    console.log("immediatly invoked function execution",str);
})("anil");

// declaring the function 

(function(date){
    console.log(date.toLocaleTimeString());
    console.log(date);
    // passing the parameter
})(new Date());