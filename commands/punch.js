const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  var punchMention =
    message.mentions.users.first() ||
    client.users.cache.find((user) => user.username === args[0]);
  if (!punchMention)
    return message.channel.send(`💢 Please mention a user you want to punch.`);

  const punchEmbed = new Discord.MessageEmbed()
    .setDescription(
      `${message.author.username} punched ${punchMention.username}!`
    )
    .setImage(
      `https://media1.tenor.com/images/5757920ac53ad76009c2f83b154e62a3/tenor.gif?itemid=14041680`
    )
    .setColor(`#00FFFF`);
  message.channel.send(punchEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "punch",
  category: "Misc",
  description: "Punches the user mentioned.",
  usage: "punch {@username}",
};
