<<<<<<< HEAD
=======
const Commando = require('discord.js-commando')
const { MessageEmbed } = require('discord.js');

module.exports = class HelpCommand extends Commando.Command{
	constructor(client){
		super(client,{
			name: 'help',
			group: 'utility',
			memberName: 'help',
			description: 'Shows available commands'
		})
	}

	async run(message){
		const botIcon = 'https://i.imgur.com/PGrtSUO_d.webp';
		const helpEmbed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('All Commands')
			.setAuthor('Franny', botIcon )
			.setDescription('Here are the commands that you can use! \n `Prefix: f.`')
			.addFields(

				{ name: 'Server Management', value: '`kick`,`ban`,`mute`' },
				{ name: 'Games', value: '`bla`,`bla`,`nye`' },
				{ name: 'Utility', value: '`ping`' },
				{ name: '\u200B', value: '\u200B' },
			)
			.setTimestamp()
			.setFooter('Thanks for using Franny!', botIcon);
			message.channel.send(helpEmbed);
			console.log(message.channel.type);
	}

}






>>>>>>> 49e775436e0ce8459530ab6c4ad51e4d73fa9062
