const  Discord  =  require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {

		const client = new Discord.Client();
		message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
	},
};