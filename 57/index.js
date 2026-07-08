console.log("Loops")

a = 1

// basic for loop

// for (i =0; i<50; i++){ // statement1 executes one time; statement2 is the condition; statement3 is executed everytime a loop body is executed
    // console.log(a + i)
// }



// forin loop

let obj = {
    name: "ck",
    role: "dev",
    company: "google"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

for (const key in obj){
    console.log(key)
}

for (const char of "chikara") {
    console.log(char)
}


// while loop

// let i = 0
// while(i<6){
//     console.log(i)
//     i++
// }


// do while loop :- less used 


let i = 10 // will run and print 10 because condition is checked at the last step
do {
    console.log(i)
    i++
} while (i<6);