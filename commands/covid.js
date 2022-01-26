const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  if (args.length < 1) {
    fetch("https://corona-api.com/timeline")
      .then((covid) => covid.json())
      .then((data) => {
        let embed = new Discord.MessageEmbed()
          .setTitle("**Global Cases**")
          .setDescription(
            `**New Confirmed Cases:** ${
              data.data[0].new_confirmed || "N/A"
            }\n**New Recovered Cases:** ${
              data.data[0].new_recovered || "N/A"
            }\n**New Deaths:** ${
              data.data[0].new_deaths || "N/A"
            }\n**Total Confirmed Cases:** ${
              data.data[0].confirmed || "N/A"
            }\n**Total Recovered Cases:** ${
              data.data[0].recovered || "N/A"
            }\n**Total Active Cases:** ${
              data.data[0].active || "N/A"
            }\n**Deaths:** ${data.data[0].deaths || "N/A"}\n
            *For country specific stats use >covid (ISO 3166-1 Code)*
            *ISO 3166-1 Codes can be found here: https://datahub.io/core/country-list/r/0.html*`
          )
          .setColor("#DC143C")
          .setTimestamp()
          .setFooter(client.user.username, client.user.avatarURL());

        message.channel.send(embed);
      });
  } else {
    fetch(`https://corona-api.com/countries/${args.join(" ")}`)
      .then((covid) => covid.json())
      .then((data) => {
        try {
          let embed = new Discord.MessageEmbed()
            .setTitle(`**${data.data.name} Cases**`)
            .setDescription(
              `**New Confirmed Cases:** ${
                data.data.today.confirmed || "N/A"
              }\n**New Deaths:** ${
                data.data.today.deaths || "N/A"
              }\n**Total Confirmed Cases:** ${
                data.data.latest_data.confirmed || "N/A"
              }\n**Total Recovered Cases:** ${
                data.data.latest_data.recovered || "N/A"
              }\n**Total Critical Cases:** ${
                data.data.latest_data.critical || "N/A"
              }\n**Total Deaths:** ${
                data.data.latest_data.deaths || "N/A"
              }\n**Recovered to Death ratio:** ${
                data.data.latest_data.calculated.recovered_vs_death_ratio ||
                "N/A"
              }\n
      *For global stats use >covid*`
            )
            .setColor("#DC143C")
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL());

          message.channel.send(embed);
        } catch (err) {
          client.embedCreator(
            message.channel,
            "**Invalid ISO 3166-1 Code!**\nTo find an ISO 3166-1 code please go here: https://datahub.io/core/country-list/r/0.html"
          );
        }
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["corona", "covid-19"],
};

exports.help = {
  name: "covid",
  category: "Misc",
  description: "Get updated statistics regarding COVID-19.",
  usage: "covid {country_name}",
};
