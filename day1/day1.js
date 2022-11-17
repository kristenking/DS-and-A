1. Big O is the language and methods to describe how long does it take the system to execute the code.Big O looks at efficiency of algorythm on a bigger scale.

2.  1.Constant Time Complexity. Constant Time Complexity is ideal scenario even though hardly ever archievable in real production world. In this scenario the given code is perfectly scalable what means adding data or any load to the code will not affect the runtime.

const arr1 = ['A', 'B', 'C', 'D', 'E', 'F'];
const arr2 = arr1.push('G');

    2. Logarythmic Time Complexity. It is the second best scenario.In this scenario it requires more time to perform the code at the beginning but while data increases we need less time to execute the code.In this case scenario we do not iterate through each step of the code what saves us a lot of time on a bigger scale.

function logTime(arr) {
    let numberOfLoops = 0;
    for (let i = 1; i < arr.length; i *= 2) {
        numberOfLoops++
    }
    return numberOfLoops;
}

    3. Linear Time Complexity. This is the scenario where to execute the code the system iterates one item at a time. A very clear example of it can be any simple for, while loops, methods : for each, find.

    for(let i = 0; i < 5; i++) {
    console.log('I love DS&A')
}

    4. Quadratic Time Complexity.This is one of the worst scenarios.This happens when we multiply iterations to execute a particular code. Good example of that is nested loops.

    for(let i = 0; i < 3; i++) {
    for (let j = 7; j < 9; j++) {
        console.log(i, j);
    }
}

    5. Factorial Time Complexity.It is the worst scenario. We get this time complexity when we try to perform relatively easy task by excruciating amount of code. Rarely met in real world. This happens when we at the very beginning have several starting points in the code that will require even more time to excute once they go all different ways to come to the end result. Any code expessing factorial mathematicaly would be an example of Factorial Time Complexity.

3.We care about Big O  because in production world and world of coding time is money. Good runtime will guaranty a desired performance overall.We also care about scalability of the code. If written code is scalable it will mean that no matter how much data we add to that, the runtime will stay at the desirable level.Also knowing the science of data and algorythms behind practical coding helps everyone to be better programmers and developers.

4. performance.now() measures the runtime for a particular chunk of code in given moment.This number can significantly differ each time we run the code on the same computer and can significantly differ from running the same code on other systems as each system has different capacity, RAM etc. Big O specificaly solves this statistics issue and looks at the bigger scale of things.


5. const someFunction = (arr1) => {
    arr1.push(1).pop()         1

    for (let i = 0; i < arr1.length; i++) {
                                                 n
        console.log('do something 2')
    }

    for (let i = 0; i < arr1.length; i++) {
                                                     n
        console.log('do something 3')
    }

    for (let i = 0; i < arr1.length; i++) {
                                                         n ^ 2
        for (let i = 0; i < arr1.length; i++) {
            console.log('do something 3')
        }
    }
}

1 + n + n + n ^ 2 = 1 + 2n + n ^ 2 = n ^ 2

6. const someFunction1 = (arr1) => {
    let sum = arr1[1] + arr[2]    1

    while (condition) {
        sum = arr[5] + arr[7]    n
    }

    for (let i = 0; i < arr1.length; i++) {
        for (let i = 0; i < arr1.length; i++) {
                                                            n ^ 3
            for (let i = 0; i < arr1.length; i++) {
                console.log('do something 3')
            }
        }
    }
}

1 + n + n ^ 3 = n ^ 3


7. We ignore constants because they represent best scenario but the task of Big O is to look at the worst possible scenario so we always look at the worst time complexity as in the end it is what significantly affects the performance of the code. 

8. Space Complexity looks at how much space will be taken in memory to execute the given code. We care because in developing world storing the data requires a lot physical and financial resources and we want to use as less space as possible.


9. - Boolean 1
    - Undefined 1
        - Null  1
            - Numbers 1
                - String  depends: can be 1 can be n
                    - Array  n
                        - Object n

10. We should use an array if we have relatively simple list of items, but we should use an object if specific keys or properties are important for us and we will need to access them later



11. const obj = {
    name: 'tony'
}
//inserting
obj.age = 44; 1
//removing 
delete obj.age; 1
//searching 1
obj.hasOwnProperty['name'] 1
//searching 2
for (const prop in obj) {
                                 n
    console.log(obj[prop])
}
//accessing
obj.age //44 1
//retrieving keys
Object.keys(obj)  n
//retrieving values
Object.values(obj) n

12. const arr2 = [1, 2, 3, 4, 5, 6, 7];
//inserting 1
arr2.push(8) 1
//inserting 2
arr2.unshift(0) n
//removing 1
arr2.pop()  1
//removing 2
arr2.shift()  n
//searching 1
const findNumber = arr2.find(num => num === 2)   n
//searching 2
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 2) {
                                             n ^ 2
        return arr2[i]
    }
}
//retrieving 
const getNumber = arr2[3]    n
//method 1
const double = arr2.map(num => num * 2)   n
//method 2
const removeAndAddNewNumber = arr2.splice(1, 1, 5)  n
//method 3
const getSum = arr2.reduce((total, num) => total + num, 0) n
//method 4
for (const num of nums) {
                                         n
    console.log(num * 2)
}
//method 5
const convertToString = arr2.join(' ')   n
//method 6
const reversed = arr2.reverse()   n

