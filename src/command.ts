import { Client, Message } from 'discord.js'
import { DoNothing } from './commands/do_nothing'
import { MemberShuffle } from './commands/member_shuffle'
import { PlayMusic } from './commands/play_music'

export interface Command {
  onMessage(client: Client, msg: Message): void
}

export function createCommand(content: string): Command {
  // add your commands
  // receive command and args
  const args = content.split(' ');
  const command = args.shift().toLowerCase();
  switch (command) {
    case '!shuffle':
      return new MemberShuffle()
    case '!play':
      return new PlayMusic(args[0])
    default:
      return new DoNothing()
  }
}
