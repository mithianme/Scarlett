const Discord = require('discord.js');

exports.run = async(client, message, args) => {   

    message.delete()

    const fortnite = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/716037272558108702/717387283048956025/video0.mov')

    message.channel.send(fortnite);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  };
  
  exports.help = {
    name: "fortnite",
    category: "Misc",
    description: "fOrTnItE",
    usage: "fortnite",
  };