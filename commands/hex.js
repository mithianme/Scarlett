const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  let embed = new Discord.MessageEmbed().setImage(
    `http://singlecolorimage.com/get/${args[0]}/800x800`
  );
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hexcode"],
};

exports.help = {
  name: "hex",
  category: "Misc",
  description: "Shows the hex colour inputted.",
  usage: "hex {hex_code}",
};
