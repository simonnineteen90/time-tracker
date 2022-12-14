const ObjectsToCsv = require('objects-to-csv')

const data = [
  { date: '12/1/22', startTime: '08:00', endTime: '16:34', flexi: '22' }
]

const saveToCsv = async (data) => {
  const csv = new ObjectsToCsv(data)
  await csv.toDisk('./test.csv')
  console.log(await csv.toString())
}

module.exports = saveToCsv