const Discord = require("discord.js");
const fetch = require("node-fetch");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  message.delete();

  if (talkedRecently.has(message.author.id)) {
    message.reply("please wait 30 seconds before issuing this command again.");
  } else {
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((random) => random.json())
      .then((data) => {
        let factembed = new Discord.MessageEmbed()
          .setDescription(data.text)
          .setColor(`#00FFFF`);
        message.channel.send(factembed);
      });

    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 30000);
  }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fact"],
};

exports.help = {
  name: "randomfact",
  category: "Misc",
  description: "Random fact (useless)",
  usage: "randomfact",
};
