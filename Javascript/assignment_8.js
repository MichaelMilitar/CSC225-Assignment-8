function reverseThisString(string){
    let splitString = string.split('')

    let reverseArray = splitString.reverse()

    let joinArray = reverseArray.join('')
    
    return joinArray
}
console.log('- Reverse String')
console.log(reverseThisString('Hello'))


function swapCase(string) {
    return string.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    })
}
console.log('- Swap Upper and Lowercase')
console.log(swapCase('Hello World'))


function toCelcius(array){
    let arr = [23, 32, 41, 50, 59]
    arr = arr.map(x => (5/9) * (x - 32));
    return arr
}
console.log('- Convert Fahrenheit to Celsius')
console.log(toCelcius())

console.log('- Less or greater than 75')
function passOrFail(array){
    let arr = [20, 30, 50, 80, 90, 100]
    let result = arr.map(x => x > 75)
    return result
}
console.log(passOrFail())

console.log('- German Numbers')
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6]
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs']

    cardinalNumbers.forEach((x, index) => {
        const num2 = germanNumbers[index]
        console.log(x + ' is ' + num2)
      })
}
germanNumbers()


function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    function isPrime(num) {
        for (let i = 2; num > i; i++) {
          if (num % i == 0) {
            return false
          }
        }
        return num > 1
      }
      
      console.log(numbers.filter(isPrime))
}
console.log('- return Prime numbers 1-15')
returnPrimeNumbers()



function fakefizzbuzz(){
    for (let i = 1; i < 101; i++){
        if (i % 5 === 0 && i % 3 === 0){
            console.log('CSC225 RULES I LOVE JAVASCRIPT')
        }
        else if (i % 5 === 0){
            console.log('I LOVE JAVASCRIPT')
        }
        else if (i % 3 === 0){
            console.log('CSC225 RULES')
        }
        else {
            console.log(i)
        }
    }
}
console.log('- Fake FizzBuzz')
fakefizzbuzz()