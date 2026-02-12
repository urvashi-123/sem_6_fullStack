function wakeup() {
    return Promise.resolve("take brush");
}

function takeShower() {
    return Promise.resolve("take shower");
}

function haveBreakfast() {
    return Promise.resolve("have breakfast");
}

function goToCollege() {
    return Promise.resolve("go to college");
}

wakeup()
    .then(result => {
        console.log(result); // Output: take brush
        return takeShower();
    })
    .then(result => {
        console.log(result); // Output: take shower
        return haveBreakfast();
    })
    .then(result => {
        console.log(result); // Output: have breakfast
        return goToCollege();
    })
    .then(result => {
        console.log(result); // Output: go to college
        console.log("Morning routine completed!");
    })
    .catch(error => {
        console.error("Error in routine:", error);
    });
    