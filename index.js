const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '*ping') {
    msg.reply('Pong!');
  }
});
client.on('message', (message) => {
  if (member.roles.find('test'))
      {      
      	var str = message.content
        message.reply("said: " + str);
      } 
  });

client.login('NTcxMjM3Mzk0MDgzMzQ4NDkz.XMK3Yw.gTdKztlDmMZSe6G8dSudOgdNjso');