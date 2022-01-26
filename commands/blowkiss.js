const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  var kissMention =
    message.mentions.users.first() ||
    client.users.cache.find((user) => user.username === args[0]);
  if (!kissMention)
    return message.channel.send(`💢 Please mention a user you want to kiss.`);

  const kissEmbed = new Discord.MessageEmbed()
    .setDescription(
      `${message.author.username} blew ${kissMention.username} a kiss! aww!`
    )
    .setImage(
      `https://media1.tenor.com/images/c56ceb68adf24c9e40da81d817b965e3/tenor.gif?itemid=16591672`
    )
    .setColor(`#00FFFF`);
  message.channel.send(kissEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "blowkiss",
  category: "Misc",
  description: "Blow a kiss to someone <3",
  usage: "blowkiss {@username}",
};
