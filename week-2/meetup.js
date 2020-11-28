const chalk = require('chalk');
module.exports =  class Meetup {
    constructor(name) {
      this.name = name
      this.attendees = []
    }
    printAttendeeNames() {
      this.attendees.forEach(printName)
    }
  }
  
  printName = person => console.log(chalk.bgGreen(person.name));