const Discord = require("discord.js");
const fetch = require("node-fetch");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  message.delete();

  if (talkedRecently.has(message.author.id)) {
    message.reply("please wait 1 minute before typing this again.");
  } else {
    fetch("https://aws.random.cat/meow")
      .then((cat) => cat.json())
      .then((data) => {
        let catEmbed = new Discord.MessageEmbed()
          .setImage(data.file)
          .setColor(`#00FFFF`);
        message.channel.send(catEmbed);
      });

    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 60000);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "cat",
  category: "Misc",
  description: "Random picture of a cat. aww",
  usage: "cat",
};
