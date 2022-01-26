const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  message.delete();

  var myArray = [
    "乁(ᴗ ͜ʖ ᴗ)ㄏ",
    "乁( ⏒ ͜ʖ ⏒ )ㄏ",
    "ლ(▀̿Ĺ̯▀̿ ̿ლ)",
    "ʅ( ͡° ͜ʖ ͡°)ʃ",
    "┐( ͡◉ ͜ʖ ͡◉)┌ ",
    "┐( ͡° ʖ̯ ͡°)┌",
  ];

  if (talkedRecently.has(message.author.id)) {
    message.reply(
      "please wait 10 seconds before using this command again, thank you!"
    );
  } else {
    var lenny = myArray[Math.floor(Math.random() * myArray.length)];
    message.channel.send(lenny);
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
  name: "shrug",
  category: "Misc",
  description: "Sends a random shrug emoji.",
  usage: "shrug",
};
