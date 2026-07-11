console.log("strings")

let a = "chikara"

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])

console.log("\n")

console.log(a.length)

console.log("\n")

let real_name = "chikara"
let friend = "harry"

console.log("His name is " + real_name + " and his friend's name is " + friend)
// To do this efficiently we can write it like written below

console.log(`His name is ${real_name} and his friend's name is ${friend}`)
// This is called as template literals and when we added variables such as real_name and friend in the template literal it is called string interpolation

let b = "neander"

console.log(b.toUpperCase()) // brackets are used because we are calling a function
console.log(b.length) // brackets are not used because we are using a string property not a function

console.log(b.slice(2,5))
console.log(b.slice(2))
console.log(b.replace("ne", "00"))
console.log(b.concat(a, "victor"))