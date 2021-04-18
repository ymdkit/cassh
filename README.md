# cassh

Discord Bot For CyberAgent22 students based on [discord.js](https://discord.js.org/#/)

## Setup

### Environment

```
cp ./.env.example .env

# And add AUTH_TOKEN
# create your test token or ask @ymdkit
```

## Launch

### Use docker
```
make build
make run
```

### Use npm
```
npm run build
npm run start
```

## How to add command

1. edit `src/command.ts`
```
export function createCommand(content: string): Command {
  // add your commands
  if (content === '!shuffle') return new MemberShuffle()
  return new DoNothing()
}
```

2. implement `commands/{your_command.ts}`

```
// example

import { Client, Message } from 'discord.js'
import { Command } from '../command'

export class YourCommand implements Command {
  onMessage(client: Client, msg: Message): void {
      // do something
  }
}
```