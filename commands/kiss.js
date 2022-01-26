const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  var kissMention =
    message.mentions.users.first() ||
    client.users.cache.find((user) => user.username === args[0]);
  if (!kissMention)
    return message.channel.send(`💢 Please mention a user you want to kiss.`);

  const kissEmbed = new Discord.MessageEmbed()
    .setDescription(
      `${message.author.username} kissed ${kissMention.username}, how sweet :blue_heart:`
    )
    .setImage(
      `https://i.pinimg.com/originals/39/fe/16/39fe167bdab90223bcc890bcb067b761.gif`
    )
    .setColor(`#00FFFF`);
  message.channel.send(kissEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "kiss",
  category: "Misc",
  description: "Kisses the user mentioned, shows love and affection.",
  usage: "kiss {@username}",
};
