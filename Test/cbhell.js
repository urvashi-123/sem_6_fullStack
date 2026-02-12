function function1(callback) {
    setTimeout(() => {
        console.log("Function 1 completed");
        callback();
    }, 1000);
}

function function2(callback) {
    setTimeout(() => {
        console.log("Function 2 completed");
        callback();
    }, 1000);
}

function function3(callback) {
    setTimeout(() => {
        console.log("Function 3 completed");
        callback();
    }, 1000);
}

function function4(callback) {
    setTimeout(() => {
        console.log("Function 4 completed");
        callback();
    }, 1000);
}

// Callback Hell
function1(function () {
    function2(function () {
        function3(function () {
            function4(function () {
                console.log("✅ Final Task: All operations finished");
            });
        });
    });
});
