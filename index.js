const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setStatus('dnd')
	client.user.setPresence({
		game: { name: ' gg!', type: "WATCHING" }
	});
});
var test = r => r.name === 'test';

client.on('message', msg => {
	if (msg.content === config.prefix + 'ping') {
		msg.channel.send("pong!");
	}
});
client.on('message', msg => {
	if (msg.content.startsWith === config.prefix + 'give') {
		let member = msg.mentions.members.first();
		member.addRole(msg.guild.roles.find(test)).catch(console.error);
		msg.reply('gave the role.')
	}
});

client.on('message', msg => {
	if (msg.content.startsWith === config.prefix + 'free') {
		let member = msg.mentions.members.first();
		member.removeRole(msg.guild.roles.find(test)).catch(console.error);
		msg.reply('is free.')
	}
});

client.on('message', msg => {
  if (msg.member.roles.find(test)){ //check if you got the role
  	var say = msg.content; //save the content of the user's message
  	var res = say.replace(/a|o|u/g, 'h') //replace letters
  	var res = res.replace(/i/g, 'hm')
  	var res = res.replace(/c|k/g, 'g')
  	var res = res.replace(/e/g, 'm')
  	var res = res.replace(/s/g, 'f')
  	var res = res.replace(/A|O|U/g, 'H')
  	var res = res.replace(/I/g, 'HM')
  	var res = res.replace(/C|K/g, 'G')
  	var res = res.replace(/E/g, 'M')
  	var res = res.replace(/S/g, 'F')
  	msg.delete(1000); //Supposed to delete message
  	msg.reply('said: ' + '"' + res + '"'); //reply with the translated message
  }
});
client.login(config.token);