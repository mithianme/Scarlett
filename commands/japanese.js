const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  message.delete();

  if (talkedRecently.has(message.author.id)) {
    message.reply(
      "please wait 10 seconds before using this command again, thank you!"
    );
  } else {
    var myArray = [
      "ಠ_ಠ",
      "(◣_◢)",
      "ノಠ_ಠノ",
      "ʕ￫ᴥ￩ʔ",
      "(人◕ω◕)",
      "(◕ᴥ◕)",
      "uwu",
      "owo",
      "♡＾▽＾♡",
      "(灬♥ω♥灬)",
      "◑.◑",
      "˚ᆺ˚",
      "(•ㅅ•)",
      "(〃▽〃)",
      "【:εω",
      "꒰◍ᐡᐤᐡ◍꒱",
      "ʕ￫ᴥ￩ʔ",
      "(◣∀◢)ψ",
    ];

    var lenny = myArray[Math.floor(Math.random() * myArray.length)];
    message.channel.send(lenny);
  }

  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 10000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "japanese",
  category: "Misc",
  description: "Posts random Japanese emojis.",
  usage: "japanese",
};
