const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var user =
    message.mentions.users.first() ||
    client.users.cache.find((user) => user.username === args[0]) ||
    client.users.cache.get(args[0]) ||
    message.author;

  let gayrate = Math.floor(Math.random() * 100);

  if (user.id == "884703602122309722" || user.id == "497880354104016906" || user.id == "709780373764309033")
    gayrate = 0;

  if (user.id == "884578570117218315")
    gayrate = 100;

  const embed = new Discord.MessageEmbed()
    .setAuthor(user.tag)
    .addField(
      ":rainbow_flag: Gay Rate :rainbow_flag: ",
      "I rate you a " + gayrate + " out of 100 on the gay radar"
    )
    .setThumbnail(user.displayAvatarURL({ format: "png", dynamic: true }))
    .setColor(`#00FFFF`)
    .setFooter(
      "requested by " + message.author.tag);

  message.channel.send(embed);

  message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "gayrate",
  category: "Misc",
  description: "See how gay someone is 0/100.",
  usage: "gayrate {@username}",
};
