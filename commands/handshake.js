const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var handshakeMention =
    message.mentions.users.first() ||
    client.users.cache.find((user) => user.username === args[0]);
  if (!handshakeMention)
    return message.channel.send(
      `💢 Please mention a user who you want to handshake with.`
    );

  const handshakeEmbed = new Discord.MessageEmbed()
    .setTitle(
      `${handshakeMention.username} and ${message.author.username} are having a friendly handshake.`
    )
    .setImage(`https://media.giphy.com/media/mGo8dkPOF6GLm/giphy.gif`)
    .setColor(`#00FFFF`);
  message.channel.send(handshakeEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "handshake",
  category: "Misc",
  description: "Give someone a handshake",
  usage: "handshake {@username}",
};
