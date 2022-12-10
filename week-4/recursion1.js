// Write a recursive function called flatTheArray which accepts an array of arrays 
// and returns a new array with all values flattened.
// flatTheArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatTheArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatTheArray([[1],[2],[3]]) // [1,2,3]
// flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
const data1 = [1, 2, 3, [4, 5]];
const data2 = [1, [2, [3, 4], [[5]]]];
const data3 = [[1],[2],[3]];
const data4 = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]];
//First I would think what we return in the end - in this case it is an array. Then when I look at the data I see that we will be looping through an array and array within array, I need to keep it in mind and use sth to determine what is the next item in array. In this case Array.isArray JS method will help to check next element in the array to avoid throwing the error when it is not a value but an array
const flatTheArray = (arr) => {
//if we think about the edge case and we want to avoid returning an empty array by default, we will add a condition
if (!arr.length) return -1;
    //I need to initialize an empty array to add values to it in the end. We will use let and not const because we will need to reassign this array later
    let flattenedArray = [];
    //Since we need to return a new array and join several arrays we will use concat method which does not mutate the original arrays but returns a new array with items from merged arrays
    for (let i = 0; i < arr.length; i++) {
        //this is where we use JS method to define arrays and merge them
        if (Array.isArray(arr[i])) {
            flattenedArray = flattenedArray.concat(flatTheArray(arr[i]));
        } else {
            //and then if it is not an array it means it is just a value and we can push it directly to the array
            flattenedArray.push(arr[i]);
        }
    }
    return flattenedArray;

};
console.log(flatTheArray(data4));
