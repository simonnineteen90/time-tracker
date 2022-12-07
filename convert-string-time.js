// convert a 24hr time as string to a date object for the current day and inputed time
const convertStringTime = (timeAsString) => { // '10:00' or '16:00'
  const date = new Date()
  const stringTimeArray = timeAsString.split(':')
  date.setHours(stringTimeArray[0],stringTimeArray[1], 00)
  return date
}

module.exports = convertStringTime