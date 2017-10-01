const generator = require('./generator')

async function main() {
  const url = process.argv[2]

  if (!url) {
    console.error('url is required')
    process.exit()
  }

  try {
    const result = await generator(url)
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}

main()
