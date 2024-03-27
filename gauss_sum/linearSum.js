// create a function that will take an argument that stands for the maximum integer tyou want to count to

// initialize a starting value for the total sum

// run a for loop that starts at the first number and counts up to the maximum
// sum the numbers in the loop

// return the final total sum

// log the final output

function someFunc(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum
}

console.log(someFunc(100))