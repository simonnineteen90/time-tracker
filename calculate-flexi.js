
const calculateFlexi = (totalMinutes) => {
  const fullDayMinutes = 444 // 7 hours 24 minutes
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