async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}


function sum(a,b,c){
    return a+b+c
}


// Immediately invokes function expression (IIFE)
(async function main() {
    console.log(a1)
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)


    // Here the concept of destructuring starts 
    // let [x,y, ...rest] = [1,5,7,8,9,10]
    // console.log(x,y,rest)


    let obj = {
        a:1,
        b:2,
        c:3
    }

    let {a,b} = obj
    console.log(a,b)

    let arr = [1,4,6]
    // 3 ways to do the same thing
    console.log(arr[0]+ arr[1]+ arr[2])
    console.log(sum(arr[0], arr[1], arr[2]))
    // Here we are using spread operator ...
    console.log(sum(...arr))

    var a1 = 5 // In line 17 we are using the variable a1 but it is defined later on here so this is called hoisting where variables can be referenced before they are declared

})()

let array = [1,5,8]
let object = {...array}
console.log(object)
