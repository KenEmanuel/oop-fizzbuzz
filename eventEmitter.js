var emitter = require('events');
var myEmitter = emitter.EventEmitter;

var ee = new myEmitter();

ee.on("hello", function () {
    console.log('Hello World');
});
ee.once("goodbye", function() {
    console.log("Goodbye");
});

ee.emit("hello");

ee.on('fizzbuzz', function(number) {
    for(var i = 1; i < number; i++) {
        if(i%3 == 0 && i%5 == 0) {
            console.log('fizzbuzz');
        } else if(i%5 == 0) {
            console.log('buzz');
        } else if(i%3 == 0) {
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
});

ee.emit('fizzbuzz', 20);