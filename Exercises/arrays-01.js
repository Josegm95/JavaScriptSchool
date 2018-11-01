//Create a numeric un-sorted array and sort using js sort method.
function sortNumbers(array) {
    return array.sort(function (a, b) {
        return a - b;
    });
}

//Testing function
myArray = [1, 7, 0, 34, 23, 5, 2];
console.log('The original Array', myArray);
sortNumbers(myArray);
console.log('Sorted Array', myArray);
