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


