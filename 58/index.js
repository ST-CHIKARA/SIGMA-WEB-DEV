function nice(name){
    console.log("hey " + name + " you are nice")
    console.log("hey " + name + " you are good")
    console.log("hey " + name + " you are great")
}


nice("berry")
console.log('\n')
nice("kerry")
console.log('\n')


function sum(a,b){
    console.log(a+b)
}

sum(4,9)
console.log('\n')

// This above function cannot return a value that we can put in another variable so we can use return instead of console.log 

function sum_a(a,b,c=3){
    // console.log(a+b)
    console.log(a,b,c)
    return a + b + c
}

result = sum_a(7,8) // will return 18 because 7+8 = 15 + 3 because sum_a have c=3 which is c's default value and that becomes 15+3=18

console.log("The sum of these numbers are", result ) 
console.log('\n')


const func1 = (x)=>{
    console.log("I am a arrow function",x)
} 

func1("ok")