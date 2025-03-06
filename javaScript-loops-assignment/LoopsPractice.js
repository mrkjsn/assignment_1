//task 1
let number = 5;

for(let i=1; i<=10; i++) {
    console.log(number, " x ", i, " = ", number*i );
}

//task 2
let n = 5;
let result = 0;

for (let i = 1; i <= n; i++) {
  result += i;
}

console.log(`The sum of the first ${n} numbers is: ${result}`);

//task 3
let arr = [2, 4, 6, 8, 10];

for(let i=0; i<arr.length; i++) {
    console.log("Array element: ", arr[i]);
}

//task 4
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        console.log("*");
    }
    console.log("");  
}


//task 5
let arr2 = [1, 3, 5, 7, 9];

for(let i=arr2.length-1; i>=0; i--) {
    console.log("Reversed Element: ", arr2[i]);
}


document.getElementById("clickMe").addEventListener("click", function () {
    alert("Button clicked!");
});