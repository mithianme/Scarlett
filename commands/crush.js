const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  var crushMention =
    message.mentions.users.first() ||
    client.users.cache.find((user) => user.username === args[0]);
  if (!crushMention)
    return message.channel.send(
      `💢 Please mention a user you want to crush on.`
    );

  const crushEmbed = new Discord.MessageEmbed()
    .setDescription(
      `${message.author.username} has a crush on ${crushMention.username} awww, how cute! :heart:`
    )
    .setImage(
      `https://media1.tenor.com/images/db66c6f2cf343c08229919d22d2c6163/tenor.gif?itemid=12270326`
    )
    .setColor(`#00FFFF`);
  message.channel.send(crushEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "crush",
  category: "Misc",
  description: "Tell someone about your affection for them.",
  usage: "crush {@username}",
};
