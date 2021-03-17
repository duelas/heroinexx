require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.botToken);

client.on('ready', readyDiscord);


client.on('message' , messageHandler);


const ascii_pardun = '⡏⣼⣿⣿⣿⢋⣾⣿⣿⣿⠏⠾⢿⡟⣼⣿⢸⣿⣿⣧⠹⣿⣿⠏⠶⠾⣦⢻⡇⣿ \n⢸⣿⣿⣿⡏⣾⣿⠟⣿⠁⣾⣿⠇⣴⢹⣿⡇⢹⣿⣿⡆⠏⣶⣿⣿⡿⢂⢸⡇⣿ \n⢸⣿⣿⡟⢸⡿⢫⡾⢇⣿⡶⣂⣶⣶⣾⣿⣿⡞⣿⣿⣿⠈⣶⡆⠶⣾⣿⢸⡇⣿ \n⣾⣿⣿⡇⠜⣤⠟⠄⠾⠛⠐⠶⢬⣹⣿⣿⣿⣷⢹⣿⣿⢸⣀⠶⠙⠛⠟⢄⡇⣿ \n⣿⣿⣿⠄⠊⡠⠠⠛⠁⠉⠉⡐⢠⡈⣿⣿⣿⣿⣇⢹⣿⠘⣠⠔⠉⢈⠑⢦⡁⡇ \n⢻⣿⣯⢰⣎⣡⣥⠄⠄⣀⢀⢀⠸⣷⣿⣿⣿⣿⣿⣇⠟⣴⣿⡀⠄⠄⠄⢸⡇⢸\n⠸⣿⣿⢸⣿⡏⢩⢸⠄⠛⢰⣴⢀⣿⣿⣿⣿⣿⣿⣿⣤⣿⠏⡄⠺⣈⠄⡾⠁⣽\n⣄⢻⣿⢸⣿⣿⡘⣿⣿⣿⣿⠟⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢿⠿⣫⣾⠏⣸⢋\n⣿⢠⡹⣇⠹⣿⣷⣜⣛⣛⣣⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⡿⠘⣃⣼ \n⣿⡞⣷⣮⣕⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣴⣾⣯⣿ \n⣿⡇⠻⣿⣿⣿⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣱⣿⣿⣿⣿\n⣿⡇⢷⣎⡹⠿⣿⣿⣿⣿⣿⣿⣿⣏⡉⠙⢛⣋⣵⣾⣿⣿⠿⣃⣶⠻⣿⣏⣿⣿ \n⣿⣇⢸⠿⣛⣥⣶⣭⣝⣛⡻⠿⢿⣿⣿⣿⡿⠿⣫⣭⣶⣶⣿⣿⣿⣷⡛⢻⣿⣿';
const pardun = 'https://i.imgur.com/4jmjaG3.jpg?1';
const wataoji = 'https://i.imgur.com/iyCobGd.png?1';
const yabe = 'https://i.imgur.com/8EzZX5L.gif';


function readyDiscord(){
	console.log('bot ready');
}

function messageHandler(msg) {
	
	if(msg.author.bot) return;
	
	var emote;
	
	var content = msg.cleanContent;
	
	if ( content === 'PARDUN') {	
	const newEmbed = new Discord.MessageEmbed()
	.setAuthor(msg.author.tag, msg.author.displayAvatarURL())
	.setDescription(ascii_pardun)
	.setColor('#0c71e0')
	.setTimestamp();
	msg.channel.send(newEmbed);
	console.log('Emote sent by ' + msg.author.tag);
	msg.delete();
	return;		
	
	} else if ( content === 'pardun') {
		emote = pardun;		
	} else if ( content === 'wataoji') {
		emote = wataoji;		
	} else if ( content === 'yabe') {
		emote = yabe;		
	} else {
		return;
	}
	
	
	const newEmbed = new Discord.MessageEmbed()
	.setAuthor(msg.author.tag, msg.author.displayAvatarURL())
	.setImage(emote)
	.setColor('#0c71e0')
	.setTimestamp();
	msg.channel.send(newEmbed);
	console.log('Emote sent by ' + msg.author.tag);
	msg.delete();
	
}