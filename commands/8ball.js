const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  //>8ball <question>
  //responds random answer

  var ball = ["Yes", "No", "I don't know, sorry!", "Maybe"];
  var random = ball[Math.floor(Math.random() * ball.length)];

  let question = args.join(" ");
  if (!question) return message.reply("You need to ask a valid question!");
  if (question.length > 2000)
    return message.reply("Questions may not exceed 2000 characters.");
  let embed = new Discord.MessageEmbed()
    .setDescription(`**${question}**\n\nAnswer: ${random}`)
    .setColor("#1E90FF");
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "8ball",
  category: "Misc",
  description: "This command will respond with a random answer, here is some examples of responses: 'Yes, No, I don't know or Maybe",
  usage: "8ball {question_here}",
};
