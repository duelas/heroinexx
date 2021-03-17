require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.botToken);

client.on('ready', readyDiscord);


client.on('message' , messageHandler);



function readyDiscord(){
	console.log('bot ready');
	console.log(client.emojis.cache);
}

function messageHandler(msg) {
	
	if(msg.author.bot) return;
	
	var emote;
	
	var content = evaluate(msg.content);
	
	if ( content === 'pardun') {
		emote = 'https://i.imgur.com/4jmjaG3.jpg?1';		
	} else if ( content === 'wataoji') {
		emote = 'https://i.imgur.com/iyCobGd.png?1';		
	} else if ( content === 'yabe') {
		emote = 'https://i.imgur.com/8EzZX5L.gif';		
	} else {
		return;
	}
	
	
	const newEmbed = new Discord.MessageEmbed()
	.setAuthor(msg.author.tag, msg.author.displayAvatarURL())
	.setImage(emote)
	.setColor('#0c71e0')
	.setTimestamp();
	msg.channel.send(newEmbed);
	msg.delete();
	
}


function escapeRegExp(str) {
	return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}

function evaluate(input) {
	let result = eval(input);
	if (result)
		result = result.toString().replace(new RegExp(escapeRegExp(process.env.botToken), 'g'), '<token removed>');
	return result;
}