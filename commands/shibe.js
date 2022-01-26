const Discord = require("discord.js");
const fetch = require("node-fetch");
const request = require('node-superfetch')
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  message.delete();

  if (talkedRecently.has(message.author.id)) {
    message.reply("please wait 30 seconds before issuing this command again.");
  } else {
    let data = await request.get(`http://shibe.online/api/shibes?count=${Math.floor(Math.random() * 100)}&urls=true`)
    let embed = new Discord.MessageEmbed()
    .setImage(data.body[Math.floor(Math.random() * data.body.length)])
    .setColor("#00FFFF")
    message.channel.send(embed)
      };

    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 30000);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["doge"],
};

exports.help = {
  name: "shibe",
  category: "Misc",
  description: "Random picture of a shibe/doge",
  usage: "shibe",
};
