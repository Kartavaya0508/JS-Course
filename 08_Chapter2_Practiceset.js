// Question 1
let age = prompt("What is your age?")
age = Number.parseInt(age)
if (age > 10 && age <= 20) {
    console.log("Your age lies between 10 and 20")
} else {
    console.log("Your age does not lies between 10 and 20")
}

// Question 2
let ageof = prompt("What is your age?")
ageof = Number.parseInt(ageof)
switch (age) {
    case '12':
        console.log("our age is 12")
        break
    case '13':
        console.log("our age is 13")
        break
    case '14':
        console.log("our age is 14")
        break
    case '15':
        console.log("our age is 15")
        break
    default:
        console.log("Your age is not special")
}

// Question 3
let num = prompt("What is your age?")
num = Number.parseInt(num)
if(num%2==0 && num%3==0){
    console.log("Your number is divisible by 2 and 3")
}

else{
    console.log("Your number is not divisible by 2 and 3")
}

// Question 4
let number = prompt("What is your age?")
number = Number.parseInt(number)
if(number%2==0 || number%3==0){
    console.log("Your number is divisible by 2 or 3")
}

else{
    console.log("Your number is not divisible by neither 2 nor 3")
}

// Question 5
let minage = prompt("What is your age?")
minage = Number.parseInt(minage)
console.log("You", (minage>=18? "can drive"; "not drive")) 

// Another method of above question

let theage = 19
theage = Number.parseInt(theage)
let input = (theage>=18? "You can drive": "You cannot drive")
console.log(input)