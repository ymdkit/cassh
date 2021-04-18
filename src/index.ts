import Discord from "discord.js";
import shuffle from "shuffle-array";

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "shuffle") {
    const channel = msg.member.voice.channel;
    const members = channel.members.array();
    const voiceChannels = client.channels.cache
      .array()
      .filter((it) => it.name.includes("スタディ"));

    shuffle(members);
    members.forEach((member, i) => {
      member.voice.setChannel(voiceChannels[i % voiceChannels.length]);
    });
  }
});

client.login(process.env.AUTH_TOKEN);
