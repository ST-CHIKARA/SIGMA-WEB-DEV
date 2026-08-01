let a = prompt("Enter 1st number: ")
let b = prompt("Enter 2nd number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Enter a valid number")
}
let sum = parseInt(a) + parseInt(b)



function main() {
    try {
        console.log("The sum is:- ", sum)
        return true
    } catch (error) {
        console.log("error aaagio")
        return false
    }
    finally { // finally is used when used in a function this will help run the code in it because when there are return statements in a function the functions stops after returning a statement so if we want to make sure our code runs after returning something we can add finally that ensures the code runs even after returning a statement. 
        console.log("files are being closed")
    }
}

let c = main()
