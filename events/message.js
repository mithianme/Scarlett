const chalk = require("chalk")

const categoriesIDS = [
  "884721263292076052", //sex
  "884721390064914442", //oral
  "884721503113977886", //lesbian
  "884726282577932289", //genres
]

module.exports = async (client, message) => {
  if (message.author.bot) return;

  var bannedWords = ["only fans", "onlyfans"];
  for(let i = 0; i < bannedWords.length; i++){
    if(message.content.toLowerCase().includes(bannedWords[i].toLowerCase())){
      message.delete()
      message.reply("please refrain from mentioning only fans, thank you!").then(m => m.delete({
        timeout: 5000}))
    }
  }

  const settings = (message.settings = client.getSettings(message.guild));

  if(categoriesIDS.includes(message.channel.parentID)){
    if(message.attachments.size >= 1){
      return
    }else{
      message.delete()
      return message.reply("Please use <#884716038971883540>").then(m => m.delete({ timeout: 5000 }))
    }
  }

  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return client.embedCreator(
      message.channel,
      `My prefix on this guild is \`${settings.prefix}\``
    );
  }

  if (message.content.indexOf(settings.prefix) !== 0) return;

  const args = message.content
    .slice(settings.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.guild && !message.member)
    await message.guild.fetchMember(message.author);

  const cmd =
    client.commands.get(command) ||
    client.commands.get(client.aliases.get(command));
  if (!cmd) return;

  if (cmd && !message.guild && cmd.conf.guildOnly)
    return client.embedCreator(
      message.channel,
      "This command is unavailable via private message. Please run this command in a guild."
    );

  cmd.run(client, message, args);

  // voila  command handler

  if (message.content.startsWith(settings.prefix)) {
    console.log(`
------------------- ${chalk.inverse('NEW PREFIX LOG')} -------------------
${chalk.underline('User:')} ${message.author.tag} / ${message.author.id}
${chalk.underline('Server:')} ${message.guild.name} / ${message.guild.id}
${chalk.underline('Channel:')} ${message.channel.name} / ${message.channel.id}
${chalk.underline('Content:')} ${message.content}
------------------------------------------------------`);
}
};