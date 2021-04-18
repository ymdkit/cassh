import { Client, VoiceChannel } from 'discord.js'
import shuffle from 'shuffle-array'

const client = new Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', (msg) => {
  if (msg.content === 'shuffle') {
    // 'shuffle' を発言したメンバーが入っているボイスチャンネルにいるメンバー全員
    const members = msg.member.voice.channel.members.array()

    const voiceChannels = client.channels.cache
      .array()
      .filter(
        (it: VoiceChannel) =>
          it.type === 'voice' && it.parentID === msg.guild.id
      )

    shuffle(members)
    members.forEach((member, i) => {
      member.voice.setChannel(voiceChannels[i % voiceChannels.length])
    })
  }
})

client.login(process.env.AUTH_TOKEN)
