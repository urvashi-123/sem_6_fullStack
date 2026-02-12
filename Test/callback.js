function function1(callback){
    setTimeout(() => {
        console.log("Function 1 completed");
        callback();
    }, 1000);
}