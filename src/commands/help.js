const { Client, MessageEmbed  } =  require('discord.js');
// const client = new Client();

const botIcon = 'https://i.imgur.com/PGrtSUO_d.webp';
const getHelp = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('All Commands')
			// .setURL('https://discord.gg/')
			.setAuthor('Franny', botIcon )
			.setDescription('Here are the commands that you can use! \n `Prefix: f.`')
			//.setThumbnail('https://i.imgur.com/PGrtSUO_d.webp')
			.addFields(

				{ name: 'Server Management', value: '`kick`,`ban`,`mute`' },
				{ name: 'Games', value: '`bla`,`bla`,`nye`' },
				{ name: 'Utility', value: '`ping`' },
				{ name: '\u200B', value: '\u200B' },
				// { name: 'Inline field title', value: 'Some value here', inline: true },
				// { name: 'Inline field title', value: 'Some value here', inline: true },
			)
			//.addField('Inline field title', 'Some value here', true)
				
			.setTimestamp()
			.setFooter('Thanks for using Franny!', botIcon);



module.exports = {
	name: 'help',
	description: 'Help command',
	execute(message, args) {


		message.channel.send(getHelp);
	}
};