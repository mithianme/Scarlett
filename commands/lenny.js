const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  message.delete();

  var myArray = [
    "(☭ ͜ʖ ☭)",
    "(ᴗ ͜ʖ ᴗ)",
    "( ° ͜ʖ °)",
    "(⟃ ͜ʖ ⟄)",
    "( ‾ ʖ̫ ‾)",
    "(͠≖ ͜ʖ͠≖)",
    "( ͡◉ ͜ʖ ͡◉)",
    "( ͡☉ ͜ʖ ͡☉)",
    "ʕ ͡° ͜ʖ ͡°ʔ",
    "( ͡° ͜ʖ ͡ °)",
    "( ͡ᵔ ͜ʖ ͡ᵔ )",
    "( ͡° ͜ʖ ͡°)",
    "( ͡o ͜ʖ ͡o)",
    "( ͡~ ͜ʖ ͡°)",
    "( ͠° ͟ʖ ͠°)",
    "( ͠° ͟ʖ ͡°)",
    "( ͡° ل͜ ͡°)",
    "ʕ ͡° ʖ̯ ͡°ʔ",
    "(ᴗ ͜ʖ ᴗ)",
    "( ͡° ͜V ͡°)",
    "ヽ(͡◕ ͜ʖ ͡◕)ﾉ",
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
  name: "lenny",
  category: "Misc",
  description: "Sends a random Lenny emoji.",
  usage: "lenny",
};
