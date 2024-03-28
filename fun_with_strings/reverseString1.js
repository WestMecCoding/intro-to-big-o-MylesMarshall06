let someStr = "STRING"

function reverseStr(str) {
    return str.split("").reverse().join("")
}

console.log(reverseStr(someStr))