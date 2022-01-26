const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {

    let shipRate = Math.floor(Math.random() * 100);
    
    let users = message.mentions.users.map(r => `<@${r.id}>`).join(` & `)
    if(!users)return;

    let shipEmbed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setTitle("COMPATIBILITY TEST BETWEEN:")
    .setDescription(users + `\nYou are **${shipRate}%** compatible out of **100%**`)
    .setColor(`#00FFFF`)
    .setTimestamp()

    message.channel.send(shipEmbed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["compatiblity"],
};

exports.help = {
  name: "ship",
  category: "Misc",
  description: "See how compatible you and another user are",
  usage: "ship {@username} {@username}",
};