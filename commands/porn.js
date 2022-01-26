const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  message.channel.send("you detty pig, no linky for you!");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "porn",
  category: "Misc",
  description: "NO DESCRIPTION",
  usage: "porn",
};
