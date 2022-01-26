const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  message.delete();

  if (talkedRecently.has(message.author.id)) {
    message.reply("please wait 1 minute before issuing this command again.");
  } else {
    const { body } = await snekfetch
      .get("https://www.reddit.com/r/AnimeGirls.json?sort=top&t=week")
      .query({ limit: 800 });

    const allowed = message.channel.nsfw
      ? body.data.children
      : body.data.children.filter((post) => !post.data.over_18);
    const randomnumber = Math.floor(Math.random() * allowed.length);
    const embed = new Discord.MessageEmbed()
      .setColor(`#00FFFF`)
      .setDescription(`Random Anime Girl`)
      .setImage(allowed[randomnumber].data.url)
      .setTimestamp();

    message.channel.send(embed);
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
  name: "anime",
  category: "Misc",
  description:
    "This command posts random pictures of Anime for all those Anime lovers.",
  usage: "anime",
};
