const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  var coinflip = ["**HEADS**", "**TAILS**"];

  const coinflipEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(
      "Your coinflip result is: " +
        coinflip[Math.floor(Math.random() * coinflip.length)]
    )
    .setTimestamp()
    .setColor(`#00FFFF`);

  message.channel.send(coinflipEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "coinflip",
  category: "Misc",
  description: "Flip a coin, will either land on heads or tails.",
  usage: "coinflip",
};
