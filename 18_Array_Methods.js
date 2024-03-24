let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(num1.length)
delete num1[0]     // delete is and operator and not a method and array length remains same even after deletion of the element
console.log(num1)
console.log(num1.length)

let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num3 = [22, 24, 57, 71, 47, 81]
let newArray = num1.concat(num2, num3)  // concat joins two or more arrays together without changing the original array
console.log(newArray)

// Sort method
let num4 = [1,5,548,18,56,164,24, 62,58 ,98,43,14,0]
num4.sort()
console.group(num4)

let compare = (a,b)=> {    // for ascending order
    return a-b
}

num4.sort(compare)
console.log(num4)

num4.reverse()
console.log(num4)

let num5 = [1,5,548,18,56,164,24, 62,58 ,98,43,14,0]
num5.splice(2, 3, 10, 11, 12)     // adds new elements to the array  // returns deleted items and modifies the array

// 1st index tells position of adding elements, 2nd attribute tells no. of elements to be removed and from 3rd attribute onwards it tells the elements to be added

console.log(num5)

let deletedvalues = num5.splice(2, 3, 10, 11, 12)     // returns deleted valuse from the array
console.log(deletedvalues)

let num6 = [1,5,548,18,56,164,24, 62,58 ,98,43,14,0]
let newnum = num6.slice(2)
console.log(newnum)

let newnum1 = num.slice(2, 5)
console.log(newnum1)
