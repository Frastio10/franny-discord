const Commando = require('discord.js-commando')

module.exports = class PingCommand extends Commando.Command{
	constructor(client){
		super(client,{
			name: 'ping',
			group: 'misc',
			memberName: 'ping',
			description: 'Shows bot latency and API latency'
		})
	}

	async run(message){
		const client = new Commando.CommandoClient()
		message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
	}

}