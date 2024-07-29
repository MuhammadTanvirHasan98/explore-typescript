// let num1= 5;
var transaction1 = {
    payerAccountNumber: 112,
    payeeAccountNumber: 234,
};
var transaction2 = {
    payerAccountNumber: 112,
    payeeAccountNumber: 523,
};
var transaction3 = {
    payerAccountNumber: 112,
    payeeAccountNumber: 623,
};
var bankAccount = {
    accountNumber: 123,
    accountHolder: 'Tanvir',
    balance: 3000,
    isActive: true,
    transaction: [transaction1, transaction2, transaction3]
};
console.log(bankAccount);
