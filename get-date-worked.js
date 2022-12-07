const prompt = require('prompt-sync')({sigint: true});
const dateWorked = () => {
  let userDate
  userDate = prompt('Enter date worked (dd/mm/yy): ') 
  console.log(userDate)
  if (userDate == '') {
    userDate = new Date()
  }
  console.log(userDate)
}

module.exports = dateWorked()