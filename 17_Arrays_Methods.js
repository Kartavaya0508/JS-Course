// Array methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string
console.log(b, typeof b)

let c = num.join("_")
console.log(c, typeof c)

let d = num.join(" and  ")
console.log(d, "are", typeof d)

let r = num.pop() // returns the popped element or last element and changes the array (DOESN'T RETURNS NEW ARRAY)
console.log(num, r)

num.pop()
console.log(num)

let s = num.push(55) // push modifies the original array and returns new array length
console.log(num, s)

let f = num.push(78)
console.log(num, f)

let g = num.shift() // removes the first element and returns it and modifies the original array
console.log(num, g)

let k = num.unshift(66) // adds an element in the beggining of the array and modifies it and returns the new array length
console.log(num, k)

