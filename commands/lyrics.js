const Discord = require("discord.js");
const fetch = require("node-fetch");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  message.delete();

  if (talkedRecently.has(message.author.id)) {
    message.reply("please wait 30 seconds before issuing this command again.");
  } else {
    let artist = args[0]
    if(!artist)return message.channel.send(`Please add a artist.`)
    let song = args.slice(1).join(" ")
    if(!song)return message.channel.send(`Please add a song name.`)

    message.channel.send(artist);
    message.channel.send(song);

    fetch(`https://api.lyrics.ovh/v1/${args[0]}/${song}`)
      .then((lyrics) => lyrics.json())
      .then((data) => {
        if(data.error)return message.channel.send(`I cannot find lyrics for this song.`)
        if(data.lyrics.length > 2000)return message.channel.send(`These Lyrics are more than 2000 characters so i cannot send them.`)
        let lyricsEmbed = new Discord.MessageEmbed()
          .setDescription(data.lyrics)
          .setColor(`#00FFFF`);
        message.channel.send(lyricsEmbed);

      });

    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 30000);
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lyric", "lyricslookup"],
};

exports.help = {
  name: "lyrics",
  category: "Misc",
  description: "lyrics (artist) (song name)",
  usage: "lyrics",
};
