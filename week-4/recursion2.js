// Write a recursive function called capitalizeWords. 
// Given an array of words, return a new array containing each word capitalized.
let words = ['tony', 'kim'];
// capitalizedAllLetters(words); // ['TONY', 'KIM']

//My first thinking that we will need to iterate through the array using for or map method and we will need to use to UpperCase method. 

const capitalizeAllLetters = (array) => {
    //In the edge case we will avoiding getting an empty array
    if (!array.length) return -1;
//I will use map method to iterate through each element in the array it still makes it recursive as we call function within the function

    return array.map(word => {
        return word.toUpperCase();
    });
    
}
console.log(capitalizeAllLetters(words));
