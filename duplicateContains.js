// 1.duplicate values

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
