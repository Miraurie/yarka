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

client.on('message', msg => {
	if (msg.content === config.prefix + 'ping') {
		msg.channel.send("pong!");
	}
});
client.on('message', msg => {
  if (msg.member.roles.find(r => r.name === 'test')){ //check if you got the role
  	var say = msg.content; //save the content of the user's message
  	var res = say.replace(/a|o|u/gi, 'h') //replace letters
  	var res = res.replace(/i/gi, 'hm')
  	var res = res.replace(/c|k/gi, 'g')
  	var res = res.replace(/e/gi, 'm')
  	var res = res.replace(/s/gi, 'f')
  	var res = res.replace(/A|O|U/gi, 'H')
  	var res = res.replace(/I/gi, 'HM')
  	var res = res.replace(/C|K/gi, 'G')
  	var res = res.replace(/E/gi, 'M')
  	var res = res.replace(/S/gi, 'F')
  	msg.delete(1000); //Supposed to delete message
  	msg.reply('said: ' + '"' + res + '"'); //reply with the translated message
  }
});
client.login(config.token);