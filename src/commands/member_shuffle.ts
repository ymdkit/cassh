import { Client, Message, VoiceChannel } from 'discord.js'
import { Command } from '../command'
import shuffle from 'shuffle-array'

export class MemberShuffle implements Command {
  onMessage(client: Client, msg: Message): void {
    // 'shuffle' を発言したメンバーが入っているボイスチャンネルにいるメンバー全員
    const members = msg.member.voice.channel.members.array()

    const voiceChannels = client.channels.cache
      .array()
      .filter(
        (it: VoiceChannel) =>
          it.type === 'voice' && it.guild.id === msg.guild.id
      )

    shuffle(members)
    members.forEach((member, i) => {
      member.voice.setChannel(voiceChannels[i % voiceChannels.length])
    })
  }
}
