import { Client } from 'discord.js'
import { createCommand } from './command'

const client = new Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', (msg) => {
  const command = createCommand(msg.content)
  command.onMessage(client, msg)
})

client.login(process.env.AUTH_TOKEN)
