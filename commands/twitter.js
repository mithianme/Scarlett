const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  const twitterEmbed = new Discord.MessageEmbed()
    .setColor("#00FFFF")
    .setTitle("**TWITTER**")
    .setURL("https://twitter.com/mithianme")
    .setTimestamp()
    .setDescription(
      "**SUMMARY**\n\nFollow me on Twitter for updates on videos. As soon as a video is posted it is automatically published to Twitter so follow me there if you want to get constistent updates on videos.\n\nhttps://twitter.com/mithianme\n**FOLLOW ME ON TWITTER 🕊️**"
    );

  message.channel.send(twitterEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "twitter",
  category: "Misc",
  description: "Mithians Twitter",
  usage: "twitter",
};
