// example 7: factorial
// factorial(1) // 1
// factorial(2) // 2
// factorial(7) // 5040
// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it;
// e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero 
// (0!) is always 1.




//Thinking goes that factorial is multiplying given number by each given number minus one.
//If given number is 2 the pattern in computer execution will be 
//2! = 2*1
//1! = 1
//0! = 1 to make it work we will need to write the edge case
//plus we need to throw away the case when the given number is a negative integer

function factorial(x){
    // console.log(x);
    //edge cases
    if (x<0) return -1;
    else if (x===0) return 1;
    else {
        return (x*factorial(x - 1));
    }
}
console.log(factorial(7));