let arr = [1,2,3,4,6,7]
console.log(arr)
console.log(arr.length)
arr[5] = 9
console.log(arr)
console.log(typeof(arr))
console.log(arr.toString())
console.log(arr.join(" and ")) // will be eventually used when working on frontend ui to display things 

arr_2 = [10,11,13,16,18]
console.log(arr_2.pop())
console.log(arr_2)
console.log(arr_2.push(27)) // while adding 27 to the last position of the array this will also return length of the array
console.log(arr_2)
console.log(arr_2.push("ck"))
console.log(arr_2)
console.log(arr_2.shift()) // removes first element of the array (brother of pop)
console.log(arr_2)
console.log(arr_2.unshift("kc")) // adds the element to the first position of the array (brother of push)
console.log(arr_2)

console.log(delete arr_2[4]) // will delete the 4th element
console.log(arr_2) // will show the 4th element as empty item 
console.log(arr_2.length) // will still show same length prior to deletion
console.log(arr_2[4]) // 4th element although deleted will be shown as undefined because memory was allocated for that element. 


console.log("\n")

let a1 = [0,0,7]
let a2 = [6,8,3]
let a3 = [0,0,1]

console.log(a1.concat(a2,a3))

let a4 = [3,7,4,1,6,9,5]

console.log(a4.sort())

console.log(a4) // after sort was used on this array it became permanently modified 

let numbers = [1,2,3,4,5]

console.log(numbers.splice(1,3)) // numbers.splice(startIndex, deleteCount) here the 2nd argument is the delete count, not the index to be ignored. It will return the deleted items  

console.log(numbers)


console.log("\n")

nub = [6,7,8,9,10]
console.log(nub.splice(1,3,55,77,99)) // the numbers after the delete count will be added to the place the numbers were deleted  

console.log(nub)


console.log(nub.slice(2)) // slice dont modify the array

console.log(nub)


console.log("\n")


// Loops

l = [2,5,6,8,9]

for (let index = 0; index < l.length; index++) {
    const element = l[index];
    console.log(element)
    
}

console.log("\n")

l.forEach((value, index, arr) => {
    console.log(value, index, arr)
});

console.log("\n")

let obj = {
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(key, element)
    
}

console.log("\n")

for (const element of l) {
    console.log(element)
}


console.log("\n")


// More imp concepts

// lets say we want to make a new array with the help of a previous array 

let arr_3 = [4,6,8,10]
let arr_sq = []
for (let index = 0; index < arr_3.length; index++) {
    const element = arr_3[index];
    arr_sq.push(element**2)
}

console.log(arr_sq)

console.log("\n")

// This was a lengthy way of doing this we have a efficient smaller way too 

let arr_5 = [2,4,6,8,10]
let arr_sq2 = arr_5.map(e=>{
    return e**2
})

console.log(arr_sq2)

console.log("\n")


// filter function extensively used when making your ui and while writing react

const greaterthanfifty = (e)=>{
    if(e>50){
        return true
    }
    return false
}

console.log(arr_sq2.filter(greaterthanfifty))

console.log("\n")


let arr_6 = [1,2,3,4]

const redu = (a,b)=>{
    return a*b
}

console.log(arr_6.reduce(redu)) // will take 2 number 1,2 multiply them = 2, then multiply 2 with 3 = 6 then, 6 with 4 which ultimately gives us 24 

