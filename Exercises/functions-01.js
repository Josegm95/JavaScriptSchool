//Create a function which reverses an array and print all items in the console
function revert(array) {
    var aux;
    var i = 0;
    var j = array.length - 1;
    while (i < j) {
        aux = array[j];
        array[j] = array[i];
        array[i] = aux;
        i++;
        j--;
    }
    console.log(array);
}

//Testing function
myArray = ['school', 'js', 'the', 'is', 'this'];
console.log(myArray);
revert(myArray);