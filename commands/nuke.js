const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  try {
    let permission1Embed = new Discord.MessageEmbed()
      .setAuthor("💢 YOU DO NOT HAVE PERMISSION TO DO THAT COMMAND!")
      .setDescription(
        "If you feel that this is an error, please feel free to contact an Administrator."
      )
      .setColor(`#00FFFF`);
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(permission1Embed);
    let permission2Embed = new Discord.MessageEmbed()
      .setAuthor("⚠️ I DO NOT HAVE PERMISSION TO DO THAT COMMAND")
      .setDescription(
        "PLEASE GIVE ME THE REQUIRED PERMISSIONS (MANAGE_CHANNELS)!"
      )
      .setColor(`#00FFFF`);
    if (!message.guild.me.hasPermission("MESSAGE_CHANNELS"))
      return message.channel.send(permission2Embed);

    if (!message.channel.parent)
      return message.channel.send("This channel is not inside of a category!");
    message.channel.send(
      ":exploding_head: Are you sure you want to nuke this channel? (y/n): "
    );
    var nuke = await message.channel.awaitMessages((msg) => {
      if (msg.content === "y") {
        message.channel.clone().then((chan) => {
          chan.setParent(message.channel.parent.id);
          chan.setPosition(message.channel.setPosition);

          let nukeEmbed = new Discord.MessageEmbed()
            .setTitle("**⚠️ CHAT HAS BEEN NUKED! ⚠️**")
            .setImage("https://media2.giphy.com/media/oe33xf3B50fsc/200.gif")
            .setDescription(
              "The chat has been nuked, this could be for various different reasons you may continue chatting, however, please make sure you revise the rules as breaking them will result in a nuke + punishment!"
            )
            .setColor("#00FFFF");
          chan.send(nukeEmbed);
        });
        message.channel.delete();
      } else if (msg.content === "n") {
        message.channel.send(
          `The channel will not be nuked & has been cancelled`
        );
      }
    });
  } catch {
    return message.channel.send(
      "Channel has to be inside of a category to nuke"
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
};

exports.help = {
  name: "nuke",
  category: "Moderation",
  description: "⚠️ NUKE ⚠️",
  usage: "nuke",
};
