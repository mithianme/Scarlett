//https://media1.tenor.com/images/fa494e85b6099eda29f75fa0ae547e7a/tenor.gif?itemid=11455412
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  var loveMention =
    message.mentions.users.first() ||
    client.users.cache.find((user) => user.username === args[0]);
  if (!loveMention)
    return message.channel.send(`💢 Please mention a user you want to love.`);

  const loveEmbed = new Discord.MessageEmbed()
    .setDescription(
      `${message.author.username} loves you ${loveMention.username} :heart:`
    )
    .setImage(
      `https://media1.tenor.com/images/fa494e85b6099eda29f75fa0ae547e7a/tenor.gif?itemid=11455412`
    )
    .setColor(`#00FFFF`);
  message.channel.send(loveEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "love",
  category: "Misc",
  description: "Sends love to the user mentioned.",
  usage: "love {@username}",
};
