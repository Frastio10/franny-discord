const Commando = require('discord.js-commando')

module.exports = class TestCommand extends Commando.Command{
	constructor(client){
		super(client,{
			name: 'test',
			group: 'games',
			memberName: 'test',
			description: 'Test only'
		})
	}

	async run(message){
		message.channel.send('tos');
	}

}