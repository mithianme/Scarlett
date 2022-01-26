const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  var fistMention =
    message.mentions.users.first() ||
    client.users.cache.find((user) => user.username === args[0]);
  if (!fistMention)
    return message.channel.send(
      `💢 Please mention a user you want to fist bump.`
    );

  const fistEmbed = new Discord.MessageEmbed()
    .setDescription(
      `${message.author.username} gave ${fistMention.username} a fist bump`
    )
    .setImage(
      `https://i.pinimg.com/originals/a1/fe/1f/a1fe1f2309a90cde8922858a9c5b527c.gif`
    )
    .setColor(`#00FFFF`);
  message.channel.send(fistEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "fistbump",
  category: "Misc",
  description: "Fistbump someone.",
  usage: "fistbump (@username)",
};
