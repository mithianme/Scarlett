const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (
    !message.author.id == "712435650544271421" ||
    !message.author.id == "709277287434158130" ||
    !message.author.id == "709780373764309033" ||
    !message.author.id == "190733468550823945"
  )
    return message.channel.send(`You dont have permission to do this command`);
  try {
    let str = "";

    client.guilds.cache.each((g) => (str += `${g.name} - ${g.memberCount}\n`));

    for (let i = 0; i < str.length; i += 2000) {
      const toSend = str.substring(i, Math.min(str.length, i + 2000));

      let embed = new Discord.MessageEmbed()
        .setTitle(`Guilds (${client.guilds.cache.size}):`)
        .setDescription(`${toSend}`)
        .setColor(`#00FFFF`);

      message.channel.send(embed);
    }
  } catch (err) {
    message.reply("got an error while viewing all data.\nError: " + err);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "guilds",
  category: "Misc",
  description: "Show all guilds",
  usage: ">guilds",
};