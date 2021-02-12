const fs = require('fs-extra')
// const download = require('download')
const transformOdsToJson = require('./transform-ods-to-json')
const getNameReports = require('./get-everything-name-reports')

const createUrl = day => `202102${day}.ods`;

/* const downloadFile = (url, filename) => {
  return download(url, 'public/data', { filename })
    .then(async () => {
      console.log(`${url} downloaded`)
      const json = await transformOdsToJson(filename)
      const jsonFileName = filename.replace('.ods', '.json')

      await fs.writeJson(`./public/data/${jsonFileName}`, json)
    })
    .catch(() => {
      console.error(`${url} can't be downloaded. Error:`)
    })
} */

(async () => {
  const days = [...Array(11).keys()].map((day) => {
    const dayToUse = `${day + 1}`.padStart(2, '0')
    return { day: dayToUse, url: createUrl(dayToUse) }
  })

  days.reduce(
    (promise, { day, url }) =>
      promise.then(() => {
        transformOdsToJson(url)
          .then((json) => {
            const jsonFileName = url.replace('.ods', '.json')
            console.log(jsonFileName)
            fs.writeJson(`./public/data/${jsonFileName}`, json)
            getNameReports()
            fs.writeJson('./public/data/latest.json', json)
            fs.writeJson('./public/data/info.json', {
              lastModified: +new Date()
            })
          })
          .catch((err) => console.log(err.message))
      }),
    Promise.resolve()
  )
})()
