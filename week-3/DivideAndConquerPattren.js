// sorted (in ascending order) integer array nums of n elements 
// and a target value, write a function to search target in nums. 
// If target exists, then return its index, otherwise return -1.
// Please write in time complexity of O(log n)
// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
// Note:
// 1. You may assume that all elements in nums are unique.
// 2. n will be in the range [1, 10000].
// 3. The value of each element in nums will be in the range [-9999, 9999].

//since we have a sorted array, we will find the element in the middle of the array. Then we will check if the value of this element is equal to target value. If the mid element is greater than the target value, we will ignore the right part of the array and if too small - left side. 

// const nums = [-1,0,3,5,9,12];
// const target = 9;

const nums = [-1,0,3,5,9,12];
const target = 2;

const binaryIterativeSearch = (nums, target) => {
    // for the boiler plate we will set the start and end of the search 
    let start = 0;
    let end = nums.length - 1;

    

    while (start<end) {
        let middleIndex = Math.floor((start + end) / 2);

        if (nums[middleIndex] === target) {
            return middleIndex;
        } else if (nums[middleIndex > target]) {
            end = middleIndex - 1
        } else {
            start = middleIndex + 1
        }
    }
return -1;
};

console.log(binaryIterativeSearch(nums, target))
