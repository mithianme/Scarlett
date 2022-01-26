const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();
  if (!message.guild.member(client.user).hasPermission("ADD_REACTIONS"))
    return message.reply(
      "Sorry, I do not have permissions to initiate this command please give me: ADD_REACTIONS. :x:"
    );
  const sayMessage = args.join(" ");
  if (sayMessage.length < 1)
    return message.channel.send("💢 You didn't provide anything for the poll.");
  if (message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTitle(" **POLL CREATED** ")
      .setDescription(`${sayMessage}`)
      .setFooter(
        "To vote please either react to the emoji assigned under the message, the green tick inidcates yes & the red x stands for no. All votes/replies are appreciated, thank you!"
      );
    message.channel.send(embed).then((m) => {
      m.react("✅");
      m.react("❌");
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "poll",
  category: "Misc",
  description: "Puts a poll based around the question asked, reactions will be added for people to react too.",
  usage: "poll {your_question}",
};