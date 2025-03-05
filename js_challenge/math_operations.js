// task 1
let item1 = 1;
let item2 = 2;
let item3 = 3;
let totalCost = item1 + item2 + item3;
console.log( "total cost is $", totalCost);
// task 2
let num1 = 1;
let num2 = 2;
let num3 = 3;
console.log("average is", (num1 + num2 + num3) / 3);
// task 3
let num = 10;
let odd_even = num % 2;
if(odd_even == 0) {
    console.log(num, "is an even number");
} else {
    console.log(num, "is an odd number");
}
// task 4
let original = 100;
let discount = 20;
let dis_amount = (original * discount) / 100;
console.log("the discounted price is $", original - dis_amount);
// bonus task
let final = 80;
let discounted = 20;
console.log("the original price before the discount was $", final / (1-discount/100));
