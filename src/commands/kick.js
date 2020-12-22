
module.exports = {
	name: 'Kick',
	description: 'Kick users',
	execute(message, args) {
		const target = message.mentions.users.first();

		 if(CMD_NAME === "kick"){
 			if (args.length === 0) return message.reply('Mention the user please 🥺');
				const member = message.guild.member(target);
			
			if(member){
				member
					.kick()
					.then((member)=>message.channel.send(`${member} has been kicked <:pakyufrastio:756858103856627763>`))
					.catch((err)=>message.channel.send());
			} else {
				message.channel.send('User not found');
			}
		} 

	},
};