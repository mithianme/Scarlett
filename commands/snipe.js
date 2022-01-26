const Discord = require("discord.js");
const talkedRecently = new Set();


exports.run = async (client, message, args) => {
    message.delete()
    if (talkedRecently.has(message.author.id)) {
        message.reply(
          "please wait 30 seconds before using this command again, thank you!"
        );
      } else {
    let sniped = client.snipe.get(message.guild.id)
    if(!sniped) return message.reply('Found no sniped message!')
    let embed = new Discord.MessageEmbed()
    .setDescription(sniped.content)
    .setColor("#00FFFF")
    .setAuthor("Message sent by: " + client.users.cache.get(sniped.author).tag, client.users.cache.get(sniped.author).displayAvatarURL)
    .setTimestamp(sniped.time)
    .setFooter(`Requested by ${message.author.username}`)
    message.channel.send(embed)
}
talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 30000);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "snipe",
  category: "Misc",
  description: "Snipes the last deleted message.",
  usage: "snipe",
};
