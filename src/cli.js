const generator = require('./generator')
const argv = require('minimist')(process.argv.slice(2))

async function main() {
  const url = argv._[0]
  const count = (argv.c || argv.count) | 0 // parse int

  if (!url) {
    console.error('url is required')
    process.exit()
  }

  try {
    const result = await generator(url, count)
    console.log(JSON.stringify(result, null, 2))
  } catch (error) {
    console.error(error)
  }
}

main()
