const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const lmgtfy = encodeURIComponent(args.slice(0).join(" "));
  if (lmgtfy.length < 1)
    return message.reply("please provide a valid LMGTFY.").catch(console.error);

  const lmgtfyEmbed = new Discord.MessageEmbed()
    .setColor("#00FFFF")
    .setDescription(`http://lmgtfy.com/?q=${lmgtfy}`);
  message.channel.send(lmgtfyEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "lmgtfy",
  category: "Misc",
  description: "lmgtfy",
  usage: "lmgtfy {your_text}",
};