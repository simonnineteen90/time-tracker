const prompt = require('prompt-sync')({sigint: true});
const convertStringToTime = require('./convert-string-time')
const calculateTimeWorked = require('./calculate-time-worked')
const calculateFlexi = require('./calculate-flexi')

const dateWorked = prompt('Enter date worked (dd/MM/yy): ') 
const startTime = prompt('Enter start time (hh:mm): ')
const endTime = prompt('Enter end time (hh:mm): ')
const lunchBreak = prompt('Enter lunch break (mm): ')

const timeWorked = calculateTimeWorked(convertStringToTime(startTime), convertStringToTime(endTime), Number(lunchBreak))
const flexi = calculateFlexi(timeWorked.totalMinutes)
console.log(`You worked ${timeWorked.hours} hours and ${timeWorked.minutes} minutes with ${lunchBreak} minutes for lunch.\n ${flexi.message}`)





// input start time and end time
// calculate number of hours worked
// save into spreadsheet
// total hours worked in week
// remaining hours
// flexi hours built up
