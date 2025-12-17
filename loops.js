// For loop
let i;
for (i=1; i<=5; i++) {
    console.log(i)
}

// sum of i to n numbers
let sum = 0;
for (let i=1; i<=5; i++) {
    sum = sum+=i
}
console.log(sum)


// while loop
let i=1;
while (i<=5) {
    console.log(i)
    i++
}

sum=0
while (i<=5) {
    sum += i
    i++
}
console.log(sum)

// do-while loop
let i=6
do {
    console.log(i)
    i++
} while (i<=5); 
// do-while loop atleast prints one time even if the condition is false


// For-Of loop
let str='isha raut'
for(let i of str){
    console.log(i)
}
// no need of condition and updation part
count=0
for(let i of str){
    console.log(i)
    count++
}
console.log("String size is:",count)