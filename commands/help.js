const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (args.length >= 1) {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);

      const helpEmbed = new Discord.MessageEmbed()
        .setColor("#00FFFF")
        .setTitle(`**${command.help.name}**`)
        .setDescription(`${command.help.description}`)
        .addFields(
          { name: "Usage", value: `${command.help.usage}` },
          {
            name: "Aliases",
            value: `${command.conf.aliases.join(", ") || "No aliases"}`,
          }
        )
        .setFooter("COPYRIGHT @ MITHIAN 2020")
        .setTimestamp();

      message.channel.send(helpEmbed);
    }
  } else {
    const allCommands = client.commands;

    const sorted = allCommands.array();

    let outputMod = [];
    let outputMisc = [];
    sorted.forEach((c) => {
      let category = c.help.category;
      if (category == "Misc") outputMisc.push(c.help.name);

      if (category == "Moderation") outputMod.push(c.help.name);
    });

    const helpEmbed = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTitle("**COMMANDS**")
      .setDescription(
        "Here is a list of commands that you can use that are in the bot, they are all serperated into different categories making it easier to find a specific command that you would like."
      )
      .addFields(
        {
          name: "Moderation",
          value: "`" + outputMod.join(", ") + "`",
        },
        {
          name: "Miscellaneous",
          value: "`" + outputMisc.join(", ") + "`",
        },
        {
          name: "Extra Information",
          value:
            "If you have any requests for what you would like to see in the bot please create a ticket here: https://discord.gg/XK2rCHtytA",
        }
      )
      .setFooter("COPYRIGHT @ MITHIAN 2020")
      .setTimestamp();

    message.channel.send(helpEmbed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "help",
  category: "Misc",
  description: "help",
  usage: "help",
};
