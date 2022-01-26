const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  var patMention =
    message.mentions.users.first() ||
    client.users.cache.find((user) => user.username === args[0]);
  if (!patMention)
    return message.channel.send(`💢 Please mention a user you want to pat.`);

  const patEmbed = new Discord.MessageEmbed()
    .setDescription(`${message.author.username} pats ${patMention.username}`)
    .setImage(
      `https://media1.tenor.com/images/e01e09d8e27c7247314b3dd611f47007/tenor.gif?itemid=13912621`
    )
    .setColor(`#00FFFF`);
  message.channel.send(patEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "pat",
  category: "Misc",
  description: "Pats the specific member mentioned.",
  usage: "pat {@username}",
};
