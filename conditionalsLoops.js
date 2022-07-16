/* a) Write a JavaScript program that accepts two integers and displays the larger of the two.*/

function number(num1, num2) {
    if (num1 > num2) {
      console.log(`The ${num1} is the largest number\n`)
    } else if (num1 === num2) {
      console.log(`The ${num1} is equal to ${num2} \n`)
    } else {
      console.log(`The number ${num2} is bigger \n`)
    }
  }
  number(1, 40)
  number(2, 2)
  number(40, 1)

  /* b) Write a JavaScript program that checks whether an integer is an even or an odd number. */

  function evenOdd(number) {
    if(number % 2 == 0) {
        console.log('Even number')
    } else{
        console.log("Odd number")
    }
  }

evenOdd(1)
evenOdd(2)
evenOdd(3)
evenOdd(4)