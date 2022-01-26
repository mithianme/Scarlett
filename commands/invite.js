const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();


  let embed = new Discord.MessageEmbed()
  .setAuthor(client.user.tag, client.user.displayAvatarURL())
  .setDescription("Invitation URL: https://bit.ly/2zzbbM5")
  .setColor("#00FFFF")
  .setTimestamp()

  message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["invitation"],
  };
  
  exports.help = {
    name: "invite",
    category: "Misc",
    description: "Gives a invite link for Scarlett",
    usage: "invite"
  };