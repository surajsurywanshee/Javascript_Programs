//1.
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

//2.
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

//3.
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

//4.
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

//5.
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

//6.
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

//6.
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

//7.
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

