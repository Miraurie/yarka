const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === config.prefix + 'ping') {
    msg.channel.send("pong!");
  }
});
client.on('message', msg => {
  if (msg.member.roles.find(r => r.name === 'test')){
  	var say = msg.content;
  	var res = say.replace(/a|e|i|o|u/gi, 'h')
  	msg.delete(1000); //Supposed to delete message
  	msg.reply('said: ' + '"' + res + '"');
  }
});
client.login(config.token);