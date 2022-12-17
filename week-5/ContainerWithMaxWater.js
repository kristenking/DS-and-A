//to find container with max water we need to set the start point and end point in the array and loop though the array and find the best pair. To find the best scenario we will be looping until left pointer is less than the right pointer
//to keep the value of max area we need to set it as a base

function maxArea(height, n) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;


while (left < right) {
    maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left))

    if (height[left] < height[right])
        left++;
    else
        right--;
}
return maxArea;
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let length = height.length;
console.log(maxArea(height, length));

let height1 = [1,1];
let length1 = height1.length;
console.log(maxArea(height1,length1));