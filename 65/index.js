// Calculate factorial 5!

// We will use reduce and for loop

// 1. using reduce

arr = [1,2,3,4,5,6]

const redu = (a,b)=>{
    return a*b
}

console.log(arr.reduce(redu))

console.log("\n")

// 2. using for loop

let fact = 1;

for (let index = arr.length - 1; index >= 0; index--) {
    fact = fact * arr[index];
}

console.log(fact);


console.log("\n")
console.log("--------------------------")

// Harry's way of solving the question

// 1. using reduce

let a = 6

function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log(c) // To just display what c holds to use what c holds we wil have to return c and then below we will have to do console.log(factorial(a)) instead of just factorial(a)
}

factorial(a)

console.log("\n")


// 2. using for loop

function facfor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    console.log(fac)
}

facfor(a)

