// console.log('Hello Word');

//  const add = (num1, num2) =>  num1 + num2; 

//  const additionResult = add(6,10);


// const multiply = (num1, num2) => num1 * num2;

// const multiplyResult = multiply(additionResult, 2);

// console.log(multiplyResult);

// const Meetup = require('./meetup') 
// const Person = require('./person')
// const chalk = require('chalk');
const {load} = require('./database');
  
//   const merve = new Person('merve', 29);
//   const armagan = new Person('armagan', 34);

//   console.log(chalk.blue('hello word'));
//   console.log(chalk.blue.bgRed.bold('hello world 2'));
   
//   merve.greet(armagan);

//   const wtmb = new Meetup('Wtm Berlin');
//   armagan.attend(wtmb);
//   merve.attend(wtmb);

//   wtmb.printAttendeeNames();

  //save('./meetup.json', wtmb);
//   save('./person.json', merve);
  const loadedFile = load('./person.json');
  console.log(loadedFile.name);
  