const PRODUCTION = process.env.NODE_ENV === 'production'
if (!PRODUCTION) {
  require('dotenv').config()
}

const AHO_TOKEN = process.env.AHO_TOKEN
if (!AHO_TOKEN) {
  throw new Error(
    'You must set the AHO_TOKEN environment variable before running the bot.'
  )
}

const Discord = require('discord.js')

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`AhoMaidBot is ready!`)
})

client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong')
  }
})

client.login(AHO_TOKEN)
