const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  var cuddleMention =
    message.mentions.users.first() ||
    client.users.cache.find((user) => user.username === args[0]);
  if (!cuddleMention)
    return message.channel.send(
      `💢 Please mention a user you want to cuddle wuddle.`
    );

  const cuddleEmbed = new Discord.MessageEmbed()
    .setDescription(
      `${message.author.username} cuddle wuddled ${cuddleMention.username} aww!`
    )
    .setImage(
      `https://i.pinimg.com/originals/2d/41/38/2d4138c7c24d21b9d17f66a54ee7ea03.gif`
    )
    .setColor(`#00FFFF`);
  message.channel.send(cuddleEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hug"],
};

exports.help = {
  name: "cuddle",
  category: "Misc",
  description: "Cuddle someone.",
  usage: "cuddle {@username}",
};
