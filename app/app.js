const prompt = require('prompt-sync')({sigint: true});
const { calculateTimeWorked, calculateFlexi, getDateWorked } = require('./calulate-time')

const dateWorked = getDateWorked()
const startTime = prompt('Enter start time (hh:mm): ')
const endTime = prompt('Enter end time (hh:mm): ')
const lunchBreak = prompt('Enter lunch break (mm): ')

const timeWorked = calculateTimeWorked(startTime, endTime, lunchBreak)
const flexi = calculateFlexi(timeWorked.totalMinutes)
console.log(`On ${dateWorked} you worked ${timeWorked.hours} hours and ${timeWorked.minutes} minutes with ${lunchBreak} minutes for lunch.\n ${flexi.message}`)





// input start time and end time
// calculate number of hours worked
// save into spreadsheet
// total hours worked in week
// remaining hours
// flexi hours built up
