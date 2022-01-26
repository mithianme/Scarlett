const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  var killMention =
    message.mentions.users.first() ||
    client.users.cache.find((user) => user.username === args[0]);
  if (!killMention)
    return message.channel.send(`💢 Please mention a user you want to kill.`);

  const killEmbed = new Discord.MessageEmbed()
    .setDescription(
      `${message.author.username} has just murdered ${killMention.username} in cold blood!`
    )
    .setImage(
      `https://media1.tenor.com/images/098f3b1829196d3dd951b7d5170307ec/tenor.gif?itemid=14917444`
    )
    .setColor(`#00FFFF`);
  message.channel.send(killEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "kill",
  category: "Misc",
  description: "Kills someone >:)",
  usage: "kill {@username}",
};
