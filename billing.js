/*This is the percentage that determines the transaction charge*/
// var  billing constant=2.5
const amount=0.025;
var amountTendered=100000;
console.log('This is what the billed amount is(Less transaction charges)');
console.log (amountTendered-(amount/amountTendered));
VM337:3 This is what the billed amount is(Less transaction charges)
VM337:4 99999.99999975