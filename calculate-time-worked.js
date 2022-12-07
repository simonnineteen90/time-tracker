const calculateTimeWorked = (startTime, endTime, lunchBreak) => {
  const timeWorked = (endTime.getTime() -  startTime.getTime()) / 1000
  const totalMinutes = Math.floor((timeWorked / 60) - lunchBreak)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = Math.floor(totalMinutes % 60)

  return {
    totalMinutes,
    hours,
    minutes,
  } 

}

module.exports = calculateTimeWorked
