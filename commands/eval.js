exports.run = async (client, message, args) => {
  if (
    message.author.id === "190733468550823945" ||
    message.author.id === "709780373764309033" ||
    message.author.id === "709277287434158130" ||
    message.author.id === "712435650544271421"
  ) {
    const code = args.join(" ");
    try {
      const evaled = eval(code);
      const clean = await client.clean(client, evaled);
      message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
      console.log(clean);
    } catch (err) {
      message.channel.send(
        `\`ERROR\` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "eval",
  category: "Misc",
  description: "Executes arbitary code, only avaliable to bot owners.",
  usage: "eval {arbitary code}",
};
