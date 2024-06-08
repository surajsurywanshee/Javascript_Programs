//1. Arithamatic Oprators

 concadination only apply on + operator it cant use - operatior

console.log(2+4)
console.log(10-4)
console.log(5*6)
console.log(47/6)
console.log(5%3)
console.log(3**10)

console.log('45'+'34')
console.log(2+'2')
console.log('4'+6)

console.log(5+8+'6')

console.log(19 -'2')
console.log(typeof(10-'2'))

console.log('10'-6)
console.log(typeof('10'-6))

console.log('suraj'-6)
console.log(typeof('suraj'-6))

console.log(3+"6"-5)

console.log(7*6)
console.log(4*"5")

console.log('5'*'5')
console.log(typeof('5'*'5'))

console.log('suraj'*'5')
console.log(typeof('suraj'*'5'))

console.log(45/3)
console.log('45'/3)
console.log('45'/'3')
console.log(typeof(5/'3'))

console.log(45%6)
console.log("53434"%3)
console.log('457565'%'53')

console.log(typeof('457565'%'53'))
console.log(typeof("Suraj Pratima" %'53'))

console.log('10'**3)

let n= 45
n++
 console.log(n++)
 --n
 ++n
 console.log(n--)
 console.log(n)


 let n='23'
 n--
 --n
 console.log(n)

 n++
 ++n
 console.log(n)

let n=20
n++
console.log(n+++n)


Comparison Operators

console.log(2>5)
console.log(3>5)
console.log(5>=5)
console.log(3<=5)

console.log(5<9)
console.log(3<5)

console.log('22'>21)
console.log('22'>='22')

console.log(47<=50)
console.log(55==50)
console.log('47'==47)

console.log(2!=2)
console.log('2'!=2)

console.log(3=='3')
console.log(50==='50')
console.log('3'==='3')

console.log('a'>'b')
console.log('abc'>'bca')
console.log('shubham'>'shivam')
console.log('suraj'>'pratima')

console.log('Z'>'y')


// Sum And Avg Values

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

