import execa from 'execa';
import { hostname, userInfo } from 'os';
import { Client } from 'discord.js';
import { token, allow, prefix } from './config.json';

const client = new Client();

client.on('message', async (message) => {
  if (!message.content.startsWith(prefix)) return;
  if (!allow.includes(message.author.id)) return message.channel.send("Error: User Not Whitelisted");
  if (message.author.id === client.user?.id) return;

  const args: any = message.content.slice(prefix.length).trim().split(/ +/);
  const cmd: any = args.shift();

  if (!cmd) return;
  try {
    await execa(cmd, args).stdout?.on('data', (d: any) => {
      if (d.length < 4000) {
        let output: any ={
          color: "#3CDD82",
          title: "Terminal Output: ",
          description: "> " + message.content + "\n\n```" + d.toString() + "```\n\n> Executed By " + message.author.id,
          timestamp: new Date().toString(),
          footer: {
            text: `${userInfo().username}@${hostname()}`
          }
        };
        message.channel.send("<===========>", { embed: output });
      }
    });
  } catch (e) {
    throw e
  }
});

client.on('ready', () => {
  console.log('Ready');
  client.user?.setActivity(`\$ | ${userInfo().username}@${hostname()}`, {
    type: "LISTENING"
  })
});

client.login(token);
