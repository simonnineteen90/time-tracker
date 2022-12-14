const prompt = require('prompt-sync')({sigint: true});
const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
}

const dateWorked = () => {
  let userDate
  userDate = prompt('Enter date worked (dd/mm/yy) or leave blank for today:  ') 
  if (userDate === '') {
    return new Date().toLocaleDateString('en-GB', dateOptions)
  }
  return new Date(userDate).toLocaleDateString('en-GB', dateOptions)
}

module.exports = dateWorked