// bill Amount

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
