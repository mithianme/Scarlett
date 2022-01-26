const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.channel.send("beep beep Im a jeep xD");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "beep",
  category: "Misc",
  description: "beep?",
  usage: "beep",
};
