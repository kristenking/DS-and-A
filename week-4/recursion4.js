// example 12: collect Strings
// Write a function called collectStrings which accepts an object and returns 
// an array of all the values in the object that have a typeof string
// collectStrings(obj) // ["foo", "bar", "baz"])
//recursion with helper



//My thinking goes that we will be looping trough the key in the object and for each element id the object will will want to use typeof "string" to catch all the string and push them to the array. To push them to an aray we will have to initialize a new array where we will push our strings.

//When I first thought of edge cases I thought it should be connected to data types and avoiding throwing errors in particular data types but then I started to doubt it since we use typeof "string" we already say don't look at anything elese I am just interested in pushing strings to an array. That is why the only edge case I can think of is if we have an empty object.

//I cannot see an example of an object but I will assume this time that we do not have an object within the object since it is not a map 
function collectStrings(obj) {
    let collectedStrings = [];
    //edge case
    if (!obj.length) return -1;

for (let key in obj){
    if (typeof obj[key] === "string") {
       collectedStrings.push(obj[key]);
    } 
}
 return collectedStrings;
    
}
console.log(collectStrings({name: 'foo', year: 2009, surname: 'bar', tempretaure: -2, question: false, type: "boolean", key: "baz"}))