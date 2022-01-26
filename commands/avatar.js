const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();
  const user =
    message.mentions.users.first() ||
    client.users.cache.find((user) => user.username === args[0]) ||
    client.users.cache.get(args[0]) ||
    message.author;

  let avatarEmbed = new Discord.MessageEmbed()
    .setAuthor(user.tag)
    .setImage(user.displayAvatarURL({ format: "png", dynamic: true, size: 2048}))
    .setColor(`#00FFFF`);
  message.channel.send(avatarEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pfp"],
};

exports.help = {
  name: "avatar",
  category: "Misc",
  description: "Gets another persons avatar or yours depending on which usage you use.",
  usage: "avatar {@username} || avatar",
};