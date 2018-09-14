const request = require('request-promise')
const parseString = require('xml2js').parseString
const pify = require('pify')
const moment = require('moment')

async function transform(podcastUrl, count) {
  if (typeof podcastUrl !== 'string') {
    return []
  }

  try {
    const xml = await request(podcastUrl)
    const result = await pify(parseString)(xml)
    const { channel } = result.rss
    const { item: items } = channel[0]

    // if 0 or undefined
    if (!count) {
      count = items.length
    }

    const flashBriefingJson = items.slice(0, count).map(item => {
      const guid = item.guid[0]._ || item.guid[0] || Math.floor(Math.random() *  m);
      const id = `urn:guid:${guid}`
      const date = moment(item.pubDate[0], 'ddd, DD MMM HH:mm:ss').format(`YYYY-MM-DD[T]HH:mm:ss[.0Z]`)
      const title = item.title[0]
      const audioUrl = item.enclosure[0]['$'].url
      const link = item.link[0]

      return {
        uid: id,
        updateDate: date,
        titleText: title,
        mainText: '', // remains blank for audio flash briefings
        streamUrl: audioUrl,
        redirectionUrl: link
      }

    })

    return flashBriefingJson
  } catch (error) {
    return error.message
  }
}

module.exports = transform
