require('dotenv').config();

const {MongoClient} = require('mongodb')
const MongoDBProvide = require('commando-provider-mongo')
const { readdirSync } = require('fs')
const path = require('path')
const Commando = require('discord.js-commando')
const config = require("./config.json")
const db = require("quick.db")
const ytdl = require('ytdl-core');
const mongo = require('./mongo')


let PREFIX =  config.default_prefix;

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
			['utility', 'Utility Commands'],
			['help', 'Help Commands'],
		])
		.registerCommandsIn(path.join(__dirname, 'commands'))


	await mongo().then((mongoose)=>{
		try {
			console.log('Connected to mongo');
		} finally{
			mongoose.connection.close()
		}
	})
});

client.on('message', async (message)=>{
	console.log(`[${message.author.tag}] : ${message.content}`);
	if(!message.content.startsWith(PREFIX) || message.author.bot) return;
	if(message.channel.type ==="dm") return;

});

module.exports.loadPrefixes = async(client)=> {
	await mongo().then(async mongoose=>{

		try{
			client.guilds.cache.forEach(async (guild)=>{

			})

		} finally{
			mongoose.connection
		}

	})

	
}

client.login(config.token);
