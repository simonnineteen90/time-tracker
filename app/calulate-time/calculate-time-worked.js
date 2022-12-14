const convertStringToTime = require('./convert-string-time')

const calculateTimeWorked = (startTime, endTime, lunchBreak) => {
  const timeWorked = (convertStringToTime(endTime).getTime() -  convertStringToTime(startTime).getTime()) / 1000
  const totalMinutes = Math.floor((timeWorked / 60) - Number(lunchBreak))
  const hours = Math.floor(totalMinutes / 60)
  const minutes = Math.floor(totalMinutes % 60)

  return {
    totalMinutes,
    hours,
    minutes,
  } 

}

module.exports = calculateTimeWorked
