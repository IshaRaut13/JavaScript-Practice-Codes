// Array ---> Collections of items
// it is mutable
// operations 
/* 
    push() --> adds elements at last
    pop() --> delete last elements and return
    toString() --> converts array to string
    concat() --> joins multiple arrays and returns result
    unshift('element') --> add to start --> push
    shift() --> delete from start and return --> pop
    slice(start, end) --> returns a piece of the array
    splice(start index, delete count, new elements(optionals) at same start index) --> change original array (add,remove,replace)
*/

let arr = [1,2,3,4,5,6,7]
//delete and replace element
console.log(arr.splice(2,2,101,102)) // start index=2, delete 2 elements, replace them with 101,102
//add element
console.log(arr.splice(2,0,103))
