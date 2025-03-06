//exercise 1
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

console.log(calculate(5, 3, sub));      // Output: 8
console.log(calculate(4, 2, div)); // Output: 8


//Exercise 2
function delayedMessage(message, delay, callback, callback2) {
    if (callback2) {
        callback2();
    }
    setTimeout(() => {
        callback(message);
    }, delay);
}

delayedMessage("Hello, world!", 2000,
    function(msg) {
        console.log(msg);
    }, function() {
    console.log("This runs before the delay");
    }
);


//Exercise 3
function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if(callback(i) === false) {
            break;
        }
    }
}

repeatTask(5, function(index) {
    console.log("Iteration:", index);
    if (index === 2) {
        return false;
    }
});


