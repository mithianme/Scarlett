const Discord = require("discord.js");
const frames = [
  "(-°□°)-  ┬─┬",
  "(╯°□°)╯    ]",
  "(╯°□°)╯  ︵  ┻━┻",
  "(╯°□°)╯       [",
  "(╯°□°)╯           ┬─┬",
];
exports.run = async (client, message, args) => {
  message.delete();
  const msg = await message.channel.send("(\\\\°□°)\\\\  ┬─┬");
  for (const frame of frames) {
    setTimeout(() => {
      msg.edit(frame);
    }, 300);
  }
  return msg;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "animtableflip",
  category: "Misc",
  description: "Animates the /tableflip command on Discord",
  usage: "animtableflip",
};
