let name = "Harry"
console.log(name.length)

console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2, 4))
console.log(name.slice(2))

let newname = name.replace("Har", "Per")
console.log(newname)
// OR
console.log(newname.replace("Perry", "Kartavaya"))

let name1 = "Hitesh"
let name2 = " Gourav"
let name3 = name1.concat(" is a friend of ", name2)
console.log(name3)

let namee = "         Janvi          "
let name4 = namee.trim()
console.log(name4)

let friend = "Urvashi"
console.log(friend[0])
console.log(friend[1])
console.log(friend[2])
console.log(friend[3])
console.log(friend[4])
console.log(friend[5])
console.log(friend[6])

let mine = "Kussh"
for (let v=0; v<5; v++) {
    console.log(mine[v])
}

// Use a FOR Loop to print a string
let kk = "Devansh"
for(let e=0; e<kk.length; e++) {
    console.log(kk)
}


