const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  var shootMention =
    message.mentions.users.first() ||
    client.users.cache.find((user) => user.username === args[0]);
  if (!shootMention)
    return message.channel.send(`💢 Please mention a user you want to kill.`);

  const shootEmbed = new Discord.MessageEmbed()
    .setDescription(
      `${message.author.username} has just shot ${shootMention.username}!`
    )
    .setImage(
      `https://media1.tenor.com/images/47cad6c83c5e4e0b0bfd807b6a098c55/tenor.gif?itemid=16181496`
    )
    .setColor(`#00FFFF`);
  message.channel.send(shootEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "shoot",
  category: "Misc",
  description: "Shoot someone >:)",
  usage: "shoot {@username}",
};
