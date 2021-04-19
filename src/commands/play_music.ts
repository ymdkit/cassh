import { Client, Message } from 'discord.js'
import { Command } from '../command'
import * as ytdl from 'ytdl-core'

export class PlayMusic implements Command {

    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    // '!play url'
    onMessage(client: Client, msg: Message): void {
        if (!this.validURL(msg, this.url)) { return }
        if (msg.member.voice.channel.joinable) {
            msg.member.voice.channel.join()
                .then(connection => {
                    const stream = ytdl(this.url, { filter: 'audioonly', quality: 'highestaudio' })
                    ytdl.getInfo(this.url).then(info => msg.reply(
                        '\nPlaying: ' + info.videoDetails.title
                        + '\nThis video URL: ' + info.videoDetails.video_url
                        + "\nLet's enjoy :)"
                    ))
                    connection.play(stream, { seek: 0, volume: 0.5 })
                        .on('finish', () => {connection.disconnect()})
                        .on('error', (e) => {console.log(e)})
                })
                .catch(e => {console.log(e)})
        }
    }

    validURL(msg: Message, url: string): boolean {
        const reg = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm
        if (!url.match(reg)) {
            msg.reply('this bot can receive only YouTube link').catch(e => {console.log(e)})
            return false;
        }
        if (!msg.member.voice.channel) {
            msg.reply('please enter the channel :(').catch(e => {console.log(e)})
            return false
        }
        return true
    }
}
