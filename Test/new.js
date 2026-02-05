console.log("Urvashi gupta");
chhavi();
function chhavi(){
    console.log("hello");

}
const fs = require('fs');
fs.writeFile('urv.txt' , 'hello world',function(err){
    if (err) console.log("hey aya kuch error");
    console.log('file has been created');
});

//const fs=require('fs');
fs.appendFile('urv.txt','how are you',function(err){
    if (err) console.log("error aya");
    console.log('file has been updated');
});

fs.rename('urv.txt','urvashi.txt',function(err){
    if (err) console.log("error aya rename me");
    console.log('file has been renamed');
});

fs.unlink('urvashi.txt',function(err){
    if (err) console.log("error aya delete me");
    console.log('file has been deleted');
});

