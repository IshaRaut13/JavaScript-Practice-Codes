//--------------------------------map()------------------------------------------

// Map --> creates a new array with the results of some operation.
//The value its callback returns are used to form new array
// Used if we want to create a new array

let arr = [1,2,3,4,5]

let newArr = arr.map((val) => {
    return val+val
})
console.log(newArr)


//--------------------------------filter()------------------------------------------

// Filter --> creates a new array of elements that give true for a condition/filter.
// Used to filter out values/items
let arr1 = [1,2,3,4,5]

let newArr1 = arr.filter((val) => {
    return val%2 === 0 //even elements only
})
console.log(newArr1)


//--------------------------------reduce()------------------------------------------

// Reduce --> Performs some operations & reduces the array to a single value.
// it returns that single value
// eg. sum, avg, largest, smallest, etc
let arr2 = [1,2,3,4,5]
sum = 0
let newArr2 = arr.reduce((prev, curr) => {
    return prev + curr //sum of all elements
})
console.log(newArr2)//15


let newArr3 = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr//largest element
})
console.log("largest element is",newArr3)//15