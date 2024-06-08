
//
function print(num) {
    for(let i=1; i<=num; i++)  {
        let star=''
        for(let j=1; j<=i*2-1; j++) {
            star=star+"*"
        }
        console.log(star)
    }
}

print(8)

function ninjaNumber(n) {
    let count=1
    for(let i=1; i<=n; i++)  {
        let str=' '
        for(let j= 1; j<=(n-i);j++){
            str= str + ' '
        }

    for(let k=1; k <= i; k++) {
        str= str + count
        count++
    }

    console.log(str)
 }

}

ninjaNumber(8)


function ninjaNumber(n) {
    let count=1
    for(let i=1; i<=n; i++)  {
        let str=' '
        for(let j= 1; j<=(n-i);j++){
            str= str + ' '
        }
    for(let k=1; k <= i; k++) {
        str= str + count
        count++
    }

    console.log(str)
 }
}
ninjaNumber(5)
