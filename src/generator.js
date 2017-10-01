const request = require('request-promise')
const parseString = require('xml2js').parseString
const pify = require('pify')
const moment = require('moment')

async function transform(podcastUrl) {
  if (typeof podcastUrl !== 'string') {
    return []
  }

  try {
    const xml = await request(podcastUrl)
    const result = await pify(parseString)(xml)
    const { channel } = result.rss
    const items = channel[0].item

    const flashBriefingJson = items.map(item => {
      const guid = item.guid[0]._
      const link = item.link[0]
      const audioUrl = item.enclosure[0]['$'].url
      const date = moment(item.pubDate[0], 'ddd, DD MMM HH:mm:ss').format(`YYYY-MM-DD[T]HH:mm:ss[.0Z]`)
      const title = item.title[0]

      return {
        uid: `urn:guid:${guid}`,
        updateDate: date,
        titleText: title,
        mainText: '',
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