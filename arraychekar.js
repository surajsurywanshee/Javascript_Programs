// //  checking

// function evenChecker(n)
//  {
//     if (n %= 2)
//     {
//         console.log('even number')
//     }
//     else
//     {
//         console.log('odd number')
//     }
//  }

//  evenChecker(65)

 // Array checking

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
