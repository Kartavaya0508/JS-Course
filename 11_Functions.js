// Sample Program
let a = 1;
let b = 2;
let c = 3;

console.log("One plus average of a and b", 1+(a+b)/2)
console.log("One plus average of c and b", 1+(c+b)/2)
console.log("One plus average of a and c", 1+(a+c)/2)

//Function

function onePlusAvg(x, y){
    console.log("Done")
    return 1 + (x+y)/2;
    // return Math.round(1 + (x+y)/2);
}

// Arrow Function
const sum = (p,q)=>{
    return p+q
}

let k = 1;
let l = 2;
let m = 3;

console.log("One plus average of k and l", onePlusAvg(k,l))
console.log("One plus average of l and m", onePlusAvg(l,m))
console.log("One plus average of m and k", onePlusAvg(k,m))
console.log(sum(9, 7))   

const hello = ()=>{
    console.log("Hey! How are you?");
    return "Kartavaya"
}

let v = hello();
console.log(v)