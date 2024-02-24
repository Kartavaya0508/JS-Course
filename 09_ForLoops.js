for (i = 0; i<10; i++){
    console.log(i)
}   

//Program to add first n natural numbers (FOR LOOP)
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i<n; i++){
    sum += (i+1)
    console.log((i+1),"+")
}
console.log("Sum of first" + n + "natural numbers is"+ sum)  


// FOR IN Loop

let obj = {
    kartavaya: 89,
    hitesh:67,
    urvashi:95,
    gourav:84
}

for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}


//FOR OF Loop

for (let b in "Kartavaya"){
    console.log(b)
}