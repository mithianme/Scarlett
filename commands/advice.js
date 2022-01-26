const Discord = require("discord.js");
const fetch = require("node-fetch");
const talkedRecently = new Set();
//https://api.adviceslip.com/advice

exports.run = async (client, message, args) => {
  message.delete();

  if (talkedRecently.has(message.author.id)) {
    message.reply("please wait 30 seconds before using this command again, thank you!")
  } else {
    fetch("https://api.adviceslip.com/advice")
      .then((advice) => advice.json())
      .then((data) => {
      const adviceEmbed = new Discord.MessageEmbed()
      // .setAuthor("ADVICE")
      .setDescription(data.slip.advice)
      .setColor(`#00FFFF`);
    message.channel.send(adviceEmbed);
  });

    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
    }, 00000);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "advice",
  category: "Misc",
  description: "This command provides you with random advice.",
  usage: "advice",
};