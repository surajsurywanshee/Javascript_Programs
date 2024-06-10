// 1.Addition

function sum(a,b)
    {
    return a+b
    }
console.log(sum(59,38))

// 2.Subtract

function sub(a,b)
    {
    return a-b
    }
console.log(sub(34,69))

// 3.Multiply

function multiply(a,b)
    {
    return a*b
    }
console.log(multiply(34,69))

// 4.Divide

function divide(a,b)
    {
    return a/b
    }
console.log(divide(34,69))

// 5.Voter Eligibility

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

// 6.Average Number

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

// 7.Oddsum Average

function oddball_sum(nums){
       let sum =0;
       let oddsum = 0;
       for(let i=0; i<nums.length; i++)
        {
            if(nums[i] %2==1)
                {
                oddsum = oddsum+nums[i]
                }
        }
            console.log(oddsum)
 }
        let oddballArray= [3,55,7,37,38,58,49,765,7]
        oddball_sum(oddballArray)

// 8.Array Length

function getArray(arg)
    {
    console.log(arg.length)
 }
getArray([2,4,3,5,2,5,32,5,3])

// 9.Celsius to Fahrenheit

function celsius(c)
     {
   let fahrenheit = (c*1.8) +32
   return fahrenheit
}
console.log(celsius(34))

// 10.Kilometer to Meter

function kmTom(km)
    {
    let meter=(km*1000)
    return meter
}
console.log(kmTom(45))

// 11.Dolor to Rupee

function dTor(dolor)
    {
    let rupee=(dolor*83.30)
    return rupee
}
console.log(dTor(45))

// 12.Fut to Cm

function futToCm(fut)
    {
    let centimeter=(fut*12)
    return centimeter
}
console.log(futToCm(45))

// 13.Sum And Avg Values

let dolphinScore = [96,88,89]
let koalasScore = [88,96,89]

let dolphinLength = dolphinScore.length
let sum=0
for(let i=0; i< dolphinLength; i++) {
    let value = dolphinScore[i]
    sum = sum + value
}
    console.log(sum)
    let dolphinAvr = sum/dolphinLength
    console.log(dolphinAvr)

let koalasLength = koalasScore.length
    sum=0
for(let i=0; i< koalasLength; i++) {
    let value = koalasScore[i]
    sum = sum + value
}
    console.log(sum)
    let koalasAvr = sum/ koalasLength
    console.log(koalasAvr)

    if(dolphinAvr > koalasAvr && dolphinAvr>100) {
        console.log('dolphin win match')
    }
    else if( koalasAvr > dolphinAvr && koalasAvr>100) {
        console.log('koalas won match')
    }
    else if (dolphinAvr==koalasAvr&&dolphinAvr>100&&koalasAvr>100) {
        console.log('match draw')
    }
    else {
    console.log('no one won the match')
    }

// 14.Bill Amount

let water = 106;
let billAmount = 0;
if (water <= 100) {
    billAmount = water * 15;
} else if (water <= 200) {
    billAmount = 1500 + (water - 100) * 14;
} else {
    billAmount = 1500 + (water - 100) * 12;
}
console.log(billAmount);

// 15. Array Addition
let Array = [3,5,3,7,8,5,9]
let sum = 0
 for (let i = 0; i < Array.length; i++) {
    sum = sum + Array[i]
 }
 console.log(sum)

// 16. Array Matrix Additon 
 let Array = [[1,2,3],[4,5,6],[7,8,9]]

let sum = 0
 for (let i = 0; i < Array.length; i++) {
    for(let j = 0; j < Array.length; j++) {
        sum = sum + Array[i][j]
    }
}
 console.log(sum)

// 17. Array Matrix Manual Addition
let Array = [[1,2,3],[4,5,6],[7,8,9]]
 function sumArray(arr) {
    let sum = 0
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr.length; j++) {
                if ((i==0 && j==0) || (i==1 && j==1) || (i==arr.length-1 && j==arr.length-1)) {
                    sum = sum + arr[i][j]
                }

            }
        }
    console.log(sum)
 }
sumArray(Array)


