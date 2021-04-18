import { Client, Message } from 'discord.js'
import { DoNothing } from './commands/do_nothing'
import { MemberShuffle } from './commands/member_shuffle'

export interface Command {
  onMessage(client: Client, msg: Message): void
}

export function createCommand(content: string): Command {
  // add your commands
  if (content === '!shuffle') return new MemberShuffle()
  return new DoNothing()
}
