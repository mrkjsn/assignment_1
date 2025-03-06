//task 1
{
    let numbers = [2, 4, 6];
    let doubled = customMap(numbers, function(num) { return num * 2; });
    console.log(doubled); // Should output: [2,4,6]

    function customMap(numbers, callback) {
        let output = [];
        for(i=0; i<numbers.length; i++) {
            output.push(callback(numbers[i])); // push the element to output after being process from callback
        }
        return output;
    }
}


//task 2
{
    let result = filter([1,2,3,4,15], function(val) { return val<10; });
    console.log(result); // Should output: [1,2,3,4]

    function filter(arr, callback) {
        let result = [];
        for(i=0; i<arr.length; i++) {
            if(callback(arr[i]) == true) {
                result.push(arr[i]); // if element is < 10, push it to result then return result
            }
        }
        return result;
    }
}


//task 3
{
    let result = some([1,2,3,4], function(val) { return val>5; });
    console.log(result); // Should output: true

    function some(arr, callback) {
        for(i=0; i<arr.length; i++) {
            if(callback(arr[i]) == true) {
                return true; // return true if element is greater than 5
            }
        }
        return false; //return false if elements are less than 5
    }
}


//task 4
{
    let result = every([1,2,3], function(val) { return val>0; });
    console.log(result); // Should output: true

    function every(arr, callback) {
        for(i=0; i<arr.length; i++) {
            if(callback(arr[i]) == false) {
                return false; // if 1 element is less than 0 then return false
            }
        }
        return true; // return true if all element is > 0
    }
}


//task 5
{
    let sum = reduce([1,2,3], function(acc, num) { return acc + num; });
    console.log(sum); // Should output: 6

    function reduce(arr, callback) {
        let sum = 0;
        for(i=0; i<arr.length; i++) {
            sum = callback(sum, arr[i]); // pass sum and elment and add them then store it in sum variable
        }
        return sum; // return sum
    }
}


//task 6
{
    let result = includes([1,2,3], function(val) { return val===2; });
    console.log(result); // Should output: true

    function includes(arr, callback) {
        for(i=0; i<arr.length; i++) {
            if(callback(arr[i]) == true) {
                return true; // if element is === 2 then element is present, return true
            }
        }
        return  false;
    }
}