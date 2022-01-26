const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

    if(!message.member.hasPermission("MANAGE_EMOJIS")) {
        return message.channel.send("💢 YOU DO NOT HAVE PERMISSION TO DO THAT COMMAND!")
    }

    if(!args[0]) {
      return message.reply("💢 YOU HAVENT PROVIDED A MESSAGE ID!")
    }

    const reactmessage = await message.channel.messages.fetch(args[0])
    if(!reactmessage){
      return message.reply("💢 I COULDN'T FIND THE MESSAGE!")
    }

  console.log(reactmessage)

  const emojis = [
    "1️⃣", "2️⃣", "3️⃣",
    "4️⃣", "5️⃣", "6️⃣",
    "7️⃣", "8️⃣", "9️⃣",
    "🔟"
  ]

  reactmessage.react(emojis[0]).catch(()=>null)
  reactmessage.react(emojis[1]).catch(()=>null)
  reactmessage.react(emojis[2]).catch(()=>null)
  reactmessage.react(emojis[3]).catch(()=>null)
  reactmessage.react(emojis[4]).catch(()=>null)
  reactmessage.react(emojis[5]).catch(()=>null)
  reactmessage.react(emojis[6]).catch(()=>null)
  reactmessage.react(emojis[7]).catch(()=>null)
  reactmessage.react(emojis[8]).catch(()=>null)
  reactmessage.react(emojis[9]).catch(()=>null)

  //>reactionadd (messageid) 

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "reactionadd",
  category: "Misc",
  description: "Reacts to images with emojis",
  usage: "reactionadd (messageid)",
};
