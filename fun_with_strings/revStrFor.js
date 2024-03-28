let someStr = "string";

function reverseStr1(str) {
  let revStr = []
  for (let i = 0; i <= str.length - 1; i++) {
    revStr.unshift(str[i])
  }
  return revStr.join("");
}

console.log(reverseStr1(someStr))

function reverseStr2(str) {
    let revStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i]
    }
    return revStr;
}

console.time("for loop revstr")
reverseStr2(someStr)
console.timeEnd("for loop revstr")
// console.log(reverseStr2(someStr))