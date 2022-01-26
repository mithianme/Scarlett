const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let announcechan = client.channels.cache.get('884716767614738442')
    let announcement = args.join(" ")

    if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.reply('You do not have permissions.');
    } else {
        let embed = new Discord.MessageEmbed()
        .setTitle('New Announcement')
        .setColor('#EECBFF')
        .setDescription(announcement)
        .setFooter(`- ${message.author.tag}`)

        announcechan.send(embed)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "announce",
  category: "Admin",
  description: "Create an announcement through a command.",
  usage: "announce {parameters}",
};
