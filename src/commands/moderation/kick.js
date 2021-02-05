const Commando = require('discord.js-commando')

module.exports = class KickCommand extends Commando.Command{
	constructor(client){
		super(client,{
			name: 'kick',
			group: 'moderation',
			memberName: 'kick',
			description: 'Kicks a member from the discord server',
			clientPermissions: [
				'KICK_MEMBERS'
			],
			userPermissions:[
				'KICK_MEMBERS'
			]
		})
	}

	async run(message){
		const target = message.mentions.users.first();
		if(!target){
			message.reply('Please specify someone to kick! 🥺') 
			return
		}

		const { guild } =  message 

		const member = message.guild.member(target)
		if(member.kickable){ 
			member.kick()
				  .then((member)=>message.channel.send(`${member} has been kicked <:pakyufrastio:756858103856627763>`))
				  .catch((err)=>console.log(err));
		} else{
			message.reply("Unable to kick that user")
		}
	}

}




