# Podcast to Flash Briefing

> Generate an [Alexa Flash Briefing](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/flash-briefing-skill-api-feed-reference) skill JSON feed from an [iTunes podcast](http://itunespartner.apple.com/en/podcasts/overview) XML feed URL.

# Install

```bash
npm install p2fb
```

## Usage

- **p2fb**(string podcastUrl, [number count]) -> {Promise}

  - podcastUrl is required.

  - count option limits the number of items to return in flash briefing JSON feed.


### Example

```javascript
const p2fb = require('p2fb')

const podcastUrl = 'https://thisweekincrypto.co/feed/podcast'
const flashBriefingJson = await p2fb(podcastUrl)

console.log(flashBriefingJson)

/*
[
  {
    "uid": "urn:guid:http://www.blubrry.com/ostlive/36405839/",
    "updateDate": "2018-08-21T20:59:00.0Z",
    "titleText": "Welcome to OST LIVE (Trailer)",
    "mainText": "",
    "streamUrl": "https://media.blubrry.com/ostlive/content.blubrry.com/ostlive/ost_live_ep_000.mp3",
    "redirectionUrl": "https://www.blubrry.com/ostlive/36405839/welcome-to-ost-live-trailer/"
  },
  ...
]
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
$ p2fb https://thisweekincrypto.co/feed/podcast -c 2

[
  "uid": "urn:guid:http://www.blubrry.com/ostlive/36423907/",
  "updateDate": "2018-08-22T20:37:36.0Z",
  "titleText": "What is Simple Token (OST)? An Overview With CEO Jason Goldberg",
  "mainText": "",
  "streamUrl": "https://media.blubrry.com/ostlive/content.blubrry.com/ostlive/ost_live_ep_001.mp3",
  "redirectionUrl": "https://www.blubrry.com/ostlive/36423907/what-is-simple-token-ost-an-overview-with-ceo-jason-goldberg/"
  ...
]
```

# Resources

- [Flash Briefing Skill API Feed Reference](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/flash-briefing-skill-api-feed-reference)

- [iTunes Connect](http://itunespartner.apple.com/en/podcasts/overview)

# License

MIT
