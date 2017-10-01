# Podcast to Flash Briefing

> Generate an [Alexa Flash Briefing](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/flash-briefing-skill-api-feed-reference) skill JSON feed from an [iTunes podcast](http://itunespartner.apple.com/en/podcasts/overview) XML feed URL.

# Install

```bash
npm install p2fb
```

## Usage

- **p2fb**(string podcastUrl, [number count]) -> {Promise}

Podcast feed URL is required. Count option limits the number of items to return in flash briefing JSON feed.


### Example

```javascript
const p2fb = require('p2fb')

const podcastUrl = 'https://dailycrypto.io/feed/podcast'
const flashBriefingJson = await p2fb(podcastUrl)

console.log(flashBriefingJson)

/*
[ { uid: 'urn:guid:https://dailycrypto.io/?p=177',
    updateDate: '2017-09-20T20:11:20.0Z',
    titleText: 'Daily Crypto 09-19-2017',
    mainText: '',
    streamUrl: 'https://media.blubrry.com/dailycrypto/content.blubrry.com/dailycrypto/Daily_Crypto_09-19-2017.mp3',
    redirectionUrl: 'https://dailycrypto.io/2017/09/19/daily-crypto-09-19-2017/' }, ... ]
*/
```

# CLI

## Install

```bash
npm install -g p2fb
```

## Usage

```bash
$ p2fb {podcast_feed_url} [options]
```

- options

  - **-c**, **--count** = {number}

### Example

```bash
$ p2fb https://dailycrypto.io/feed/podcast -c 2

[
  {
    "uid": "urn:guid:https://dailycrypto.io/?p=177",
    "updateDate": "2017-09-20T20:11:20.0Z",
    "titleText": "Daily Crypto 09-19-2017",
    "mainText": "",
    "streamUrl": "https://media.blubrry.com/dailycrypto/content.blubrry.com/dailycrypto/Daily_Crypto_09-19-2017.mp3",
    "redirectionUrl": "https://dailycrypto.io/2017/09/19/daily-crypto-09-19-2017/"
  },
  ...
]
```

# Resources

- [Flash Briefing Skill API Feed Reference](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/flash-briefing-skill-api-feed-reference)

- [iTunes Connect](http://itunespartner.apple.com/en/podcasts/overview)

# License

MIT
