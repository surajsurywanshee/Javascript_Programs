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

