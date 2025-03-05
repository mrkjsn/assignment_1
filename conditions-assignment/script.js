//task 1
let score = 91;

if (score >= 90 && score <= 100) {
    console.log("Grade A");
} else if (score >= 80 && score <= 89) {
    console.log("Grade B");
} else if (score >= 70 && score <= 79) {
    console.log("Grade C");
} else if (score >= 60 && score <= 69) {
    console.log("Grade D");
} else if (score < 60) {
    console.log("Grade F");
}

//task 2
let temperature = 6;

if (temperature < 0) {
    console.log("It's freezing outside! Bundle up!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold outside. Wear a jacket.");
} else if (temperature >= 16 && temperature <= 30) {
    console.log("The weather is nice. Enjoy your day!");
} else if (temperature > 30) {
    console.log("It's hot outside. Stay hydrated!");
} else {
    console.log("Enter temp");
}

//task 3
let age = 15;

if(age < 13) {
    console.log("You are too young for this activity.");
} else if (age >= 13 && age <= 17) {
    console.log("You need parental permission.");
} else if (age > 18) {
    console.log("You are eligible for this activity.");
}

//task 4
let age2 = 19;
let isMember = true;

if (age < 12) {
    console.log("the ticket is free");
} else if (age >= 12 && isMember == true) {
    console.log("the ticket costs $10");
} else if (age >= 12 && isMember == false) {
    console.log("the ticket costs $15");
}

//task 5
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("leap year");
        return true;
    } else {
        console.log("not leap year");
        return false;
    }
}

isLeapYear(2024);