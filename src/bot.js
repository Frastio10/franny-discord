require('dotenv').config();

const { readdirSync } = require('fs')
const { Client, MessageEmbed, Collection  } =  require('discord.js');
const client = new Client();
const ytdl = require('ytdl-core');
client.commands = new Collection();

const PREFIX =  "f.";

const commandFiles = readdirSync(`${__dirname}/commands`).filter(file => file.endsWith('.js'));




client.on('ready',()=>{
	console.log(`${client.user.username} is up!`);
	client.user.setActivity('f.help',{type: 'STREAMING'}).catch(console.error);
});


client.on('message', async (message)=>{
	console.log(`[${message.author.tag}] : ${message.content}`);

	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		client.commands.set(command.name, command);
	}


	if(!message.content.startsWith(PREFIX) || message.author.bot) return;

	if(message.content === "hi"){
		message.channel.send("anjing.");
	}

	if(message.content.startsWith(PREFIX)){

		const [CMD_NAME, ...args] = message.content
		.trim()
		.substring(PREFIX.length)
		.split(/\s+/);


		if(!client.commands.has(CMD_NAME)) return;

		try{
			client.commands.get(CMD_NAME).execute(message, args);
		} catch (error){
			console.log(error);
			message.reply('Something went wrong.')
		}


		const checkId = ()=>{
			if (args.length === 0)
		        return message.reply('Please provide an ID');
		};


	}
});



client.login(process.env.DISCORDJS_BOT_TOKEN);
