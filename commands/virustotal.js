const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  try {
    fetch(
      `https://www.virustotal.com/vtapi/v2/url/report?allinfo=true&scan=1&apikey=796d1cb8e70d847649db5f9f5c54e1a23f4dbf9bb07e2daadbfb7d6c963974e6&resource=${args[0]}`
    )
      .then((virusAna) => virusAna.json())
      .then((data) => {
        let posArray = [];
        for (let i = 0; i < Object.keys(data.scans).length; i++) {
          if (data.scans[Object.keys(data.scans)[i]].detected == true) {
            posArray.push(Object.values(data.scans)[i].result);
          }
        }

        let embed = new Discord.MessageEmbed()
          .setTitle("**URL Analysis**")
          .setDescription(
            `${data.verbose_msg}\n**Postives:** ${
              data.positives || "N/A"
            }\n**Total scans:** ${
              data.total || "N/A"
            }\n**Results:** ${posArray.join(", ")}`
          )
          .setColor("#DC143C")
          .setTimestamp()
          .setFooter(client.user.username, client.user.avatarURL());

        message.channel.send(embed);
      });
  } catch (err) {
    client.embedCreator(message.channel, "Not a valid download URL");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["viruscheck", "scan"],
};

exports.help = {
  name: "virustotal",
  category: "Misc",
  description: "Scans a download URL.",
  usage: "virustotal {download_url}",
};
