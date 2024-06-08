//addition

function sum(a,b)
{
    return a+b
}
console.log(sum(59,38))

//subtract

function sub(a,b)
{
    return a-b
}

console.log(sub(34,69))

//multiply

function multiply(a,b)
{
    return a*b
}

console.log(multiply(34,69))

//divide

function divide(a,b)
{
    return a/b
}

console.log(divide(34,69))

// Voter eligibility

console.log('hello')
function voter(age)
{
    if(age >= 18)
    {
        console.log('voter eligible the giving a vote')
    }
    else
    {
        console.log('voter not eligible to giving a vote')
    }
}

voter(46)

// Average Number
function averageGrade(arr) {
    let sum=0;
  for(let i=0; i< arr.length; i++)
    {
        sum=sum+arr[i]
            console.log(sum)
    }

    let avr= sum/arr.length
    console.log(avr)
    return avr

}

    averageGrade([4,35,76,76,34,69])


// Array Length

function getArray(arg)
{
    console.log(arg.length)
}

getArray([2,4,3,5,2,5,32,5,3])


// Celsius to Fahrenheit

function celsius(c)
 {
   let fahrenheit = (c*1.8) +32
   return fahrenheit
}

console.log(celsius(34))

// kilometer to meter

function kmTom(km)
{
    let meter=(km*1000)
    return meter
}

console.log(kmTom(45))


// dolor to rupee

function dTor(dolor)
{
    let rupee=(dolor*83.30)
    return rupee
}

console.log(dTor(45))

// fut to cm

function futToCm(fut)
{
    let centimeter=(fut*12)
    return centimeter
}

console.log(futToCm(45))

// Array Check
  function ArrayProblem1(n, arr) {
        let max = arr[0]
         let index=0
        for(let i=0; i<n; i++) {
            if(arr[i]> max) {
                max= arr[i]
                index =i
            }
        }
        console.log(index)
        }

        ArrayProblem1(12, [3,6,467,32,8,3,673,8,54,54,267,76])

  
// Nuber chechr for few condition
function numCheck(number) {
         if(number % 3 ) {
            console.log('fizz')
         }
         else if(number % 5) {
            console.log('buzz')
         }
         else if(number % 5 && number %5) {
            console.log('fizz buzz')
         }
         else {
            console.log('null fizz buzz')
         }
    }

    numCheck(3)

