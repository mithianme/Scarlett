const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  message.delete();

  const botInfo = new Discord.MessageEmbed()

    .setColor(`#00FFFF`)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(
      `**CREDITS**\nFounder: mithian#6666\nContributors: con#1337, Udxr#6191, Syfe#6969\n\n**STATISTICS**\nTotal User(s): ${client.users.cache.size}\nTotal Channel(s): ${client.channels.cache.size}\nTotal Server(s): ${client.guilds.cache.size}\n\n**BOT INFORMATION**\nLibrary: Discord.js v12.2\nEngine: Node.js v12.13.1\nVersion: 1.0.0`
    )
    .addField(
      "Bot Uptime: ",
      moment
        .duration(Math.floor(process.uptime() * 1000))
        .format("D [days], H [hours], m [minutes]"),
      true
    )
    .addField(
      "Memory Usage: ",
      `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
      true
    )
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL());

  message.channel.send(botInfo);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "botinfo",
  category: "Misc",
  description: "Information regarding the bot, usage, guilds etc...",
  usage: "botinfo",
};
