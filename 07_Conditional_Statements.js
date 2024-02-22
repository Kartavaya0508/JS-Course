let a = prompt("Hey what's your age?")
// console.log(typeof a)
// alert("Hey!!")

a = Number.parseInt(a) // Converting a string into number
if(a>0) {
    alert("This is a valid age")
}
else{
    alert("This is an invalid age")
}


// New program

let b = prompt("Hey what's your age?")
a = Number.parseInt(b) // Converting a string into number
if(a<0){
    alert("This is an invalid age")
}

else if(a<9){
    alert("You are kid and you cannot even think of driving")
}

else if(a<18 && a>=9){
    alert("You are a kid and you can think of driving after 18")
}

else{
    alert("You can drive as you are above 18")
}

// Turnary operator
console.log("You can", (a<18? "not drive": "drive"))