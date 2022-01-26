const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var user =
    message.mentions.users.first() ||
    client.users.cache.find((user) => user.username === args[0]) ||
    client.users.cache.get(args[0]) ||
    message.author;

  let sexyrate = Math.floor(Math.random() * 100);

  if (user.id == "884703602122309722" || user.id == "709277287434158130" || user.id == "709780373764309033")
    sexyrate = "you're too fuckin sexy I cannot rate you";
  
  if (user.id == "884578570117218315")
    sexyrate = "you're -69"

  const embed = new Discord.MessageEmbed()
    .setAuthor(user.tag)
    .addField(
      ":heart_decoration: Sexy Rate :heart_decoration: ",
      "I rate you a " + sexyrate + " out of 100 on the sexy scale",
    ) .setFooter(
      "requested by " + message.author.tag
    )
    .setThumbnail(user.displayAvatarURL({ format: "png", dynamic: true }))
    .setColor(`#00FFFF`);
  message.channel.send(embed);

  message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "sexyrate",
  category: "Misc",
  description: "Rates you on a scale of 0/100 on how sexy you are.",
  usage: "sexyrate {@username}",
};
