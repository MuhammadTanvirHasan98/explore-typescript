
// let num1= 5;

// function calculation(num1: number, num2: number){
//     return num1+num2;
// }

// // const five = calculation(2,5);

// console.log(calculation(num1,3))


//  function getTotal(numbers: Array<number>){
//      return numbers.reduce((acc, item)=>{
//           return acc + item;
//      },0)
//  }


//  console.log(getTotal([3,2,4]));


// const user ={
//      firstName: 'Muhammad',
//      lastName: 'Tanvir',
//      role: 'Engineer'
// };

 
//  console.log(user);


// Types alias
// number, string, arr[]: string[] or  number[], boolean

// custom type //
//  type User = {
//       name: string, //there should be assigned only the string value
//       age: number ,// there should be assigned only number
//       address?:string // there can be assigned string value or undefined
//  }


//  const user: User ={
//      name:'Muhammad', // must property
//      age: 26 ,  //must property
//      address: 'Mirpur' //optional property: I can either put string value to is or nothing
//  }

//  console.log(user);

// // A function has by default void type
//   function login(userData: User):User{
//      userData.name = "Muhammad Tanvir";
//      userData.age = 26;
//      //   return true : --> it gives error bcz we should only return User type value from this function after declaring its type
//      return userData
//   }

//   const newUser =  {name:'Tanvir', age:30}
//   console.log(login(newUser));
  
 

//   type ID = number | string;

//   const userId:ID = 3196


// Interfaces
//   interface Transaction {
//       payerAccountNumber: number;
//       payeeAccountNumber: number;
//   }
//   interface BankAccount {
//       accountNumber: number;
//       accountHolder:string;
//       balance: number;
//       isActive: boolean;
//       transaction: Transaction[];
//   }


//   const transaction1: Transaction = {
//     payerAccountNumber: 112, 
//     payeeAccountNumber: 234,
//   }
//   const transaction2: Transaction = {
//     payerAccountNumber: 112, 
//     payeeAccountNumber: 523,
//   }
//   const transaction3: Transaction = {
//     payerAccountNumber: 112, 
//     payeeAccountNumber: 623,
//   }

//    const bankAccount: BankAccount = {
//       accountNumber:123,
//       accountHolder:'Tanvir',
//       balance: 3000,
//       isActive: true,
//       transaction: [transaction1, transaction2, transaction3]
//    }

//    console.log(bankAccount);
   



//   --- Reuse of two interfaces together --- //

//  here is a problem of repeatation of name, price, fileSize, format etc. properties
//to avoid this repeatation we can use extends keyword to include other interfaces properties into another 
 interface Book {
     name: string;
     price: number;
 }

 interface EBook extends Book{
    //  name: string;
    //   price: number;
      fileSize: number;
      format: string;
 }

 interface AudioBook extends EBook{
    //  name: string;
    //   price: number;
    //   fileSize: number;
    //   format: string;
      duration: number;
 }

 const book: AudioBook={
     name:'Biography of Muhammad SW',
     price: 1500,
     fileSize: 300,
     format: 'pdf',
     duration: 5
 }

