const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  if (talkedRecently.has(message.author.id)) {
    message.reply(
      "please wait 10 seconds before using this command again, thank you!"
    );
  } else {
    message.channel.send("┬─┬﻿ ノ( ゜-゜ノ)");
  }

  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 10000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "tableflip",
  category: "Misc",
  description: "Posts the /tableflip command.",
  usage: "tableflip",
};
