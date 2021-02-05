const Commando = require('discord.js-commando')
const mongo = require('../../mongo.js')
const commandPrefixSchema = require('../../schemas/command-prefix-schema')

module.exports = class PingCommand extends Commando.Command{
	constructor(client){
		super(client,{
			name: 'prefix',
			group: 'misc',
			memberName: 'prefix',
			description: 'Sets the prefix',
			userPermissions:[
				'ADMINISTRATOR'
			],
			argsType: 'multiple'
		})
	}

	async run(message, args){
		  if(args.length < 3){
		  	await mongo().then(async mongoose => {
			  	const guildId = message.guild.id
			  	const prefix = args[0]

			  	try{
			  		await commandPrefixSchema.findOneAndUpdate({
			  			_id: guildId
			  		},{
			  			_id: guildId,
			  			prefix

			  		},{
			  			upsert: true
			  		})

			  		message.reply(`The prefix for this server is now ${prefix}`)
			  	} finally{
			  		mongoose.connection.close()
			  	}

			  })
		  } else{
		  	 return message.reply('sorry the maximum of the prefix is 3 characters')
		  }
	}

}