const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  message.delete();

  if (!message.channel.nsfw)
    return message.channel.send(
      "You cannot send NSFW content in a channel that doesn't have NSFW enabled, please enable it then try and reuse this command."
    );

  if (talkedRecently.has(message.author.id)) {
    message.reply("please wait 30 seconds before typing this again.");
  } else {
    const { body } = await snekfetch
      .get("https://www.reddit.com/r/NSFWfunny.json?sort=top&t=week")
      .query({ limit: 800 });

    const allowed = message.channel.nsfw
      ? body.data.children
      : body.data.children.filter((post) => post.data.over_18);
    const randomnumber = Math.floor(Math.random() * allowed.length);
    const embed = new Discord.MessageEmbed()
      .setColor(`#00FFFF`)
      .setDescription(`Random NSFW from r/funnyNSFW`)
      .setImage(allowed[randomnumber].data.url)
      .setTimestamp();

    message.channel.send(embed);
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 30000);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["funnynsfw"],
};

exports.help = {
  name: "nsfw",
  category: "Misc",
  description: "Sends a random picture of funny NSFW, channel must be NSFW.",
  usage: "nsfw",
};
