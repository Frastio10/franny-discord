require('dotenv').config();

const { readdirSync } = require('fs')
const path = require('path')
const Commando = require('discord.js-commando')
const config = require("./config.json")
const db = require("quick.db")
const ytdl = require('ytdl-core');



let PREFIX =  "f.";

const client = new Commando.CommandoClient({
	owner:'325386201697615882',
	commandPrefix: config.default_prefix
})


client.on('ready', async()=>{
	console.log(`${client.user.username} is up!`);
	client.user.setActivity('f.help',{type: 'STREAMING'}).catch(console.error);



	client.registry
		.registerGroups([
			['misc', 'Misc Commands'],
			['moderation', 'Moderation Commands'],
			['games','Game Commands'],
			['utility', 'Utility Commands']
		])

		.registerCommandsIn(path.join(__dirname, 'commands'))
});


client.on('message', async (message)=>{
	console.log(`[${message.author.tag}] : ${message.content}`);
	if(!message.content.startsWith(PREFIX) || message.author.bot) return;
	if(message.channel.type ==="dm") return;	
});



client.login(process.env.DISCORDJS_BOT_TOKEN);
