// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the 
// majority element always exists in the array.
// Please solve using a linear time complexity and using the frequency counter pattern
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
// Constraints:
// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
/**
* @param {number[]} nums
* @return {number}
*/

// 1. We should find if majority element exists. For that we will loop through the array
// 2. We will check the count of each element to find out which element's frequency is greater.
const solution = (nums) => {
    let frequencyCounter={};
    let maxFrequency = 0;
    // we will loop through array to have an object with keys and values
    for  (let num of nums) {
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;

    //now we need to loop through the object to check the values of each key. If the value is greater then maxFrequency number we need to set maxFrequency value to this new value
    for (num in frequencyCounter) {
        if (frequencyCounter[num] > maxFrequency) {
           return num;
        }
    }
    }
}

console.log(solution([3,2,3]))

// console.log(solution([2, 2, 1, 1, 1, 2, 2]))

// time complexity O(n)
// space complexity O(1)
