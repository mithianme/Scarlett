const Discord = require('discord.js');

exports.run = async(client, message, args) => {  

    const embed = args.join(" ")
    if(embed < 1) return message.channel.send("💢 You need to provide text that you would like to embed!")

    const embed2 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setDescription(embed)
    .setColor(`#00FFFF`)

    message.channel.send(embed2)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  };
  
  exports.help = {
    name: "embed",
    category: "Misc",
    description: "Will embed a random message you want.",
    usage: "embed {text}",
  };