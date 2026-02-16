//hello , this is urvashi gupta
function urvashi(){
    console.log("hello urvashi");
}
urvashi()
setTimeout(() => {   
     urvashi()
},2000)

setTimeout(() => {
    console.log("1");

    setTimeout(() => {
        console.log("2");

        setTimeout(() => {
            console.log("3");

            setTimeout(() => {
                console.log("4");
            }, 2000);

        }, 2000);

    }, 2000);

}, 2000);
const nayapromise = new Promise((resolve, reject) => {
    let deliver = true;
    if(deliver ){
        resolve ("deliver ho gya ");
    }
    reject ("deliver nhi hua");
});
nayapromise
.then(()=> console.log("ye ho gya resolve"))
.catch(() => console.log("error"));``
