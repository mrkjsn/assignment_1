//task 1
function customFilter(arr, callback) {
    let filtered = []; 
    for(let i=0; i<arr.length; i++) {
        if(callback(arr[i]) == true) { // if this is true then arr[i] is an even number
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  // Output: [2, 4, 6]


//task 2
function countdown(start, callback) {
    for(let i = start; i>=0; i--) {
        setTimeout(() => {
            callback(i);
        }, (start - i) * 1000 ); // this is to make the delay increases each iteration
    }
}

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);  // Output: 5 4 3 2 1 0 (with 1-second delay between each)


//task 3
function createButton(buttonText, callback) {
    let button = document.createElement("button"); // create a button
    button.textContent = buttonText; // assign buttonText to the button to make the button have a title
    button.addEventListener("click", callback); // add an event listener
    document.body.appendChild(button); // put the button in the body
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);  


//task 4
function runTasks(tasks) {
    // 3 set timeout with a 1 second interval of their delay
    setTimeout(() => {
        task1();
    }, 1000 );``
    setTimeout(() => {
        task2();
    }, 2000 );
    setTimeout(() => {
        task3();
    }, 3000 );
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);  


// task 5
function askQuestion(question, choices, correctAnswer, callback) {
    console.log(question);
    console.log(choices);
    console.log(correctAnswer);
    if(correctAnswer == 4) { // check if correctAnswer is the right answer
        let isCorrect = true; // assign true if coorect
        callback(isCorrect); // callback to print the answer
    } else {
        let isCorrect = false; // assign false if wrong
        callback(isCorrect); // callback to print the answer
    }
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);