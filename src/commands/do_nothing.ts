import { Client, Message } from "discord.js"
import { Command } from "../command"

export class DoNothing implements Command {
  
    onMessage(client: Client, msg: Message): void {
        // do nothing
    }
  }