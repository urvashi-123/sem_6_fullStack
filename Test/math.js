// import add from './demo.js';
// const add = require('./demo.js');
// console.log(add(2, 3)); // Should print 5
function greet(name , callback ){
    console.log("Hello " + name);
    callback();
}
function byebye(){
    console.log("byebye");
}
greet("urvashi",bubye);