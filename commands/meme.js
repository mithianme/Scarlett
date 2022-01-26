const Discord = require("discord.js");
const fetch = require("node-fetch");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  message.delete();

  if (talkedRecently.has(message.author.id)) {
    message.reply(
      "please wait 30 seconds before getting using this command again."
    );
  } else {
    fetch("https://meme-api.herokuapp.com/gimme")
      .then((meme) => meme.json())
      .then((data) => {
        let memeEmbed = new Discord.MessageEmbed()
          .setImage(data.url)
          .setColor("#00FFFF");
        message.channel.send(memeEmbed);
      });

    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 30000);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "meme",
  category: "Misc",
  description: "Posts a random picture of a meme.",
  usage: "meme",
};
