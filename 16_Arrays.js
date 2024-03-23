let marks_class_12 = [ 32, 45, 96, 83, "Not present", null, false]
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])
console.log(marks_class_12[7])  // will be undefined because index 7 does not exist
console.log("The length of marks_class_12 is", marks_class_12.length)

marks_class_12[7] = 89  // Adding a new value to the array
console.log(marks_class_12[7])
marks_class_12[0] = 90  // Changing the value of an array //ARRAYS ARE MUTABLE BUT STRINGS ARE IMMUTABLE
console.log(marks_class_12)
console.log(typeof marks_class_12)

for (let i=0; i<marks_class_12.length; i++) {
    console.log("The order of printing elements will be " + marks_class_12[i])
}