// Write a function that reverse a string

// function reverseString(str){
//     const str2arr = str.split('')
//     const reversedArr = str2arr.reverse()
//     const revStr = reversedArr.join('')
//     return revStr
// }

function reverseString(str) {
    return str.split('').reverse().join('')
}
const str = 'hello'
const reversedStr = reverseString(str);
console.log(reversedStr);


// function reverseString(str){
//     let revStr = ''
//     for(let i = str.length -1; i>0; i--) {
//         revStr += str[i]
//     }
//     return revStr    
// }