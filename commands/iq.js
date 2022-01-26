const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if (
    message.author.id == "709277287434158130" ||
    message.author.id == "190733468550823945"
  )
    IQ = 5000;

  IQmessage = "";

  if (IQ < 500) {
    IQmessage = "dant wurry we ware all patatoes nonce.";
  } else if (IQ > 500) {
    IQmessage = "wow! you're a very clever man congratulations.";
  }
  let iqEmbed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag}`)
    .setDescription(`You have an IQ of: **${IQ}**\n${IQmessage}`)
    .setColor("#00FFFF");
  message.channel.send(iqEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "iq",
  category: "Misc",
  description: "Shows your IQ",
  usage: "iq",
};
