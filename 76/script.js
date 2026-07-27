// Here we are simulating  the getData function as in getting data from a server
// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 4000);
//     })
// }

// will be converted to a actual function 
async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
    
}

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully 

async function main() {

    console.log("Loading modules")
    console.log("background loading")
    console.log("Load data")

    // while this function runs and waits the other below like process data and task in bgd will run but if we want to do that we wait and only when we get the data the process data and task in bgd runs we can do something like (will comment out later) :- 

    // This was 1st approach 

    // let data = getData()
    // data.then((v) => {
    //     console.log(data)
    //     console.log("process data")
    //     console.log("task in bgd")
    // })

    // 2nd approach async/await and use async in our getData function and await in let data

    let data = await getData()
    console.log(data)
    console.log("process data")
    console.log("task in bgd")


}

main()