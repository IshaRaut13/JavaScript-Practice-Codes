// for a given array with marks of students --> [85,97,44,37,76,60]
// Find the avg marks of the entire class

let marks = [85,97,44,37,76,60]
sum = 0
for (let mark of marks) {
    sum += mark
}

avg = sum/marks.length
console.log("Average marks of the entire class is", avg)