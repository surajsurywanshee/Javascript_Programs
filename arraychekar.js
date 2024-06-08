//1. Odd and Even Number Checking Program

function evenChecker(n)
 {
    if (n %= 2)
    {
        console.log('even number')
    }
    else
    {
        console.log('odd number')
    }
 }
 evenChecker(65)

// 2. Array Checking Program

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

//3. Nuber chechr for few condition

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

 // 4.Array Checking Program

 function evenChecker(arg)
 {
    let length = arg.length
    for(let i=0; i= arg.length; i--)
     {
        if (n %= 2)
     {
        console.log('even number', arg)
    }
    else
      {
        console.log('odd number', arg)
      }
    }
}
 evenChecker([2,5,4,3,4,8])

//5. Details Cheking Program

 function studentChecker(name, classes)
 {
for (let i=0; i< classes.length; i++)
{
    if(classes[i]==name)
      {
        console.log('he is a student of the this class')
      }
    else
      {
        console.log('he is not a student of the')
      }

    }
}
let bia3 = ['suraj','pratima','sir']
let bia4 = ['see','rfedrt','su']
studentChecker('suraj',bia3)

// 6.Duplicate Values Cheking Program

let array=[1,2,3,4,2,5,1]

let isDuplicate = false

for(let i=0; i<array.length-1; i++)
{
    let firstValue = array[i]
    for(let j=i+1; j<array.length; j++)
    {
        let secondValue = array[i]
        if(firstValue == secondValue)
        {
            isDuplicate = true
        }
    }
}
console.log(isDuplicate)
