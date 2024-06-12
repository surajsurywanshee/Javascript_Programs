// 1.
function printStar (n) {
    for(let i=1; i<=n; i++) {
        let str='*'
        for(let j=1; j<=n; j++) {
            str=str+'*'
        }
        console.log(str)
    } 
}
printStar(4)

// 2.
function printStar (n) {
    for(let i=1; i<=n; i++) {
        let str=''
        for(let j=1; j<=i; j++) {
            str=str+'*'
        }
        console.log(str)
    } 
}
printStar(5)

// 3.
function printStar (n) {
    for(let i=1; i<=n; i++) {
        let str=''
        for(let j=1; j<=(n-i+1); j++) {
            str=str+'*'
        }
        console.log(str)
    } 
}
printStar(5)

// 4.
function printStar (n) {
    for(let i=1; i<=n; i++) {
        let str=''
        for(let j=1; j<i; j++) {
            str=str+' '
        }
        for(let k=1; k<=n-i+1; k++){

            str = str+'X '
        }
        console.log(str)
    }
}
printStar(5)

// 5.
function hollowSquare(n) {
    for(let i=1; i<=n; i++) {
      let str = ''
      for(let j=1; j<=n; j++) {
        if(i==1 || i==n || j==1 || j==n) {
            str = str + ' x '
        }
        else{
            str= str+ ''
        }
      }
        console.log(str)
    }
}
hollowSquare(6)

// 6.
function hollowSquare(n) {
    for(let i=1; i<=n; i++) {
      let str = ''
      for(let j=1; j<=n; j++) {
        if(i==1 || i==n || j==1 || j==n) {
            str = str + 'x'
        }
        else{
            str= str+ ' '
        }
      }
        console.log(str)
    }
}
hollowSquare(6)

// 7.
function hollowSquare(n) {
    for(let i=1; i<=n; i++) {
      let str = ''
      for(let j=1; j<=n; j++) {
        if(i==1 || i==2 || i==(n/2)|| i==(n/2+1)|| i==n || i==(n-1)|| j==1 || j==2 || j==n|| j==(n-1)) {
            str = str + 'S'
        }
        else{
            str= str+ ' '
        }
      }
        console.log(str)
    }
}
hollowSquare(20)

// 8.
function hollowSquare(n) {
    for(let i=1; i<=n; i++) {
      let str = ''
      for(let j=1; j<=n; j++) {
        if((i==1 || i==n) && (j==1 || j==n)) {
            str = str + 'x'
        }
        else{
            str= str+ ' '
        }
      }
        console.log(str)
    }
}
hollowSquare(10)

// 9.
function print(num) {
    for(let i=1; i<=num; i++) {
        let star=''
        for(let j=1;j<=num;j++) {
            star=star+"*"
        }
        console.log(star)
    }
}
print(5)

// 10.
function print(num) {
    for(let i=num; i>=1; i--) {
        let star=''
        for(let j=1;j<=i*2-1;j++) {
            star=star+"*"
        }
        console.log(star)
    }
}
print(9)

// 11.
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

//12.
function print(num) {
    for(let i=1; i<=num; i++)  {
        let star=''
        for(let j=1; j<=i; j++) {
            star=star+"*"
        }
        console.log(star)
    }
}
print(8)

//13.
function print(num) {
    for(let i=1; i<=num; i++)  {
        let star=''
        for(let j=1; j<= num-1; j++) {
                star=star+' '
            }
            for(let k=1; k<= i; k++){
                star=star+'*'
            }
            console.log(star)
        }
    }
print(8)

// 14.
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

// 15.
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

// 16.
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

// 17.
function printStar (n) {
    for(let i=1; i<=n; i++) {
        let str=''
        for(let j=1; j<=i; j++) {
            str=str+'*'
        }
        console.log(str)
    }
    for(let k=1; k <=n-1; k++) {
        let str = ''
    for(let l=1; l<=n-k; l++) {
            str= str+ '*'
        }
        console.log(str)
    }
}
printStar(5)

// 18.
function pattern(n) {
    let totalrows = (n*2)-1
    let count =1
    for( let i=1; i<= totalrows ; i++ ) {
        let str=''
        for( let j=1; j<=count; j++ ){
            str = str+'X'
        }
            if(i < n) {
                count++
            }
            else {
                count--
            }
            console.log(str)
    }
}
pattern(6)

// 19. 

function pattern(n){
let space1=n//3
for(let i=1;i<=n-1;i++){
let str=''
for(let j=1;j<=i;j++){
    str=str+'X'
    //x
    //xx
}
for(let k=1;k<=space1;k++){
    str=str+' '
}
space1=space1-2
for(let l=1;l<=i;l++){
    str=str+'X'
}
console.log(str)
}
//second pattern
let str2=''
for(let m=1;m<=(n*2)-1;m++){
    //m=1=2=3=4=5=6
    str2=str2+'X'
}
// str2=xxxxx
console.log(str2)
let space2=1//3
for(let o=1;o<=n-1;o++){
    // o=1/2
    let str3=''
for(let p=1;p<=n-o;p++){
    // p=2=3
str3=str3+'X'
}
// str3=xx0Xx
for(let q=1;q<=space2;q++){
    str3=str3+' '
}
space2=space2+2
for(let r=1;r<=n-o;r++){
    str3=str3+'X'
    }
    console.log(str3)
}
}
pattern(3)
