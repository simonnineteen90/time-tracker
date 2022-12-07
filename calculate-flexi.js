
const calculateFlexi = (totalMinutes) => {
  const fullDayMinutes = Math.floor(7.36 * 60)
  const minutes = Math.floor(totalMinutes - fullDayMinutes)
  let message
  if (fullDayMinutes <= totalMinutes) {
    message = `You earned ${minutes} minutes of flexi today! Thats ${minutes / 60 } hours!`
  } else {
    message = `You used ${minutes} minutes of flexi today. Thats ${minutes / 60 } hours.`
  }

  return {
    minutes,
    message
  }

}

module.exports = calculateFlexi