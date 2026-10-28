let price = prompt("Enter a price tag:");

let cleanPrice = price.replace("$", "");

let numberPrice = parseFloat(cleanPrice);

let discount = numberPrice * 0.10;

let newPrice = numberPrice - discount;

console.log(`Your new price is: $${newPrice}`);