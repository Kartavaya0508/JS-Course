// Problem 1 - Write a program to print marks of object using For Loop

let marks = {
    kartavaya: 90,
    urvashi: 89,
    janvi:60,
    hitesh:51,
    g0ourav:76
}
for(let i=0; i<Object.keys(marks).length;i++){
console.log("The marks of "+ Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// Problem 2 - Above question using FOR IN Loop

for( let key in marks) {
    console.log("The marks of " + key + " are " + marks[key])
}

// Problem 3 - Write a program to print "try again" until the user enters a correct value

let cn = 45
let c
while(c!=cn) {
    c = prompt("Enter the number")
    console.log("Try again")
}
console.log("You entered the correct number") 

// Problem 4 - Write a function to get mean of five numbers

const mean = (p, q, r, s, t) => {
    return (p+q+r+s+t)/5;
}

console.log("The mean of five numbers is ", mean(1,2,3,4,5))

