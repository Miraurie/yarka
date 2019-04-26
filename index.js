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
var tied = r => r.name === 'Tied up'; //search for the Tied up role
var gagged = r => r.name === 'Gagged'; //search for the Gagged

//ping the bot
client.on('message', msg => {
	if (msg.content === config.prefix + 'ping') {
		msg.channel.send('Ready to tie up some people!');
	}
});

client.on('message', msg => { //when a message is posted
	if (msg.content.startsWith(config.prefix)) { //check if the message starts with the bot prefix
		if (msg.content.startsWith(config.prefix + 'free' || config.prefix + 'tie')) { //check if the command is free or tie
			if (msg.member.roles.find(tied)){ //check if the one who send the command have the role Tied up
				msg.channel.send('You can\'t do that if you\'re tied up!')
			} else if (msg.content.startsWith(config.prefix + 'free')) { //check if the message is the command free
				const role = msg.guild.roles.find(tied); //search for the role Tied up
				const member = msg.mentions.members.first(); //takes the mentionned user
				member.removeRole(msg.guild.roles.find(tied)).catch(console.error); //removes the role Tied up
				msg.reply(member + 'is free.')
			}else if (msg.content.startsWith(config.prefix + 'tie')){
				const role = msg.guild.roles.find(tied);
				const member = msg.mentions.members.first();
				member.addRole(role);
				msg.channel.send(member + 'is tied up.');
			}
		}
	} else {
  if (msg.member.roles.find(gagged)){ //check if you got the role
  	var say = msg.content; //save the content of the user's message
  	var res = say.replace(/a|o|u/g, 'h') //replace letters
  	var res = res.replace(/i/g, 'hm')
  	var res = res.replace(/c|k/g, 'g')
  	var res = res.replace(/e/g, 'm')
  	var res = res.replace(/s/g, 'f')
  	var res = res.replace(/y/g, 'n')
  	var res = res.replace(/A|O|U/g, 'H')
  	var res = res.replace(/I/g, 'HM')
  	var res = res.replace(/C|K/g, 'G')
  	var res = res.replace(/E/g, 'M')
  	var res = res.replace(/S/g, 'F')
  	var res = res.replace(/Y/g, 'N')
  	msg.delete(1000); //Supposed to delete message
  	msg.reply('said: ' + '"' + res + '"'); //reply with the translated message
  }}
});
client.login(config.token);