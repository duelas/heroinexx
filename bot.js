require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const emotes =  require('./emote.json');


client.login(process.env.botToken);

client.on('ready', readyDiscord);


client.on('message' , messageHandler);



function readyDiscord(){
	console.log('bot ready');
}

function messageHandler(msg) {
	
	if(msg.author.bot) return;
	
	
	var content = msg.cleanContent;
	
	emotes.forEach(e => {commandChk(e,content,msg);});
	
}


function commandChk(e,content,msg){
	
	if (!(content === e.name)) return;	
	
	const newEmbed = new Discord.MessageEmbed()
	.setAuthor(msg.author.tag, msg.author.displayAvatarURL())
	.setColor('#0c71e0')
	.setTimestamp();
	
	if (e.string) { newEmbed.setDescription(e.value); } else { newEmbed.setImage(e.value); }
	
	
	msg.channel.send(newEmbed);
	console.log(e.name + ' sent by ' + msg.author.tag);
	msg.delete();
	
	
}