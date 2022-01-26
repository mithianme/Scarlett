const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  let emojiEmbed = new Discord.MessageEmbed()
    .setColor(0xf45c42)
    .setAuthor("WARNING NOTICE (EMOJI)")
    .setDescription(
      "This command will not work if there are too many emojis in the server, sorry. This is due to the fact that the character limit is capped at 2,000.\n\nAll this command does is display all emojis that are in a server so we wouldn't recommend worrying about it too much."
    )
    .setTimestamp();

  message.channel.send(emojiEmbed);

  message.channel.send(
    `Emoji List: ${message.guild.emojis.cache
      .map((emojiMap) => emojiMap.toString())
      .join(" ")}`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["emojis"],
};

exports.help = {
  name: "emoji",
  category: "Misc",
  description: "Gets the list of emojis in a discord server.",
  usage: "emoji",
};
