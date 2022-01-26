const Discord = require("discord.js");

module.exports = (client) => {
  const defaultSettings = {
    prefix: ">",
  };

  client.embedCreator = (channel, message, thumbnailImage) => {
    try {
      if (!thumbnailImage.length) thumbnailImage = client.user.avatarURL();
    } catch (e) {
      thumbnailImage = client.user.avatarURL();
    }

    // update this for general embed
    const embedCreated = new Discord.MessageEmbed()
      .setColor("#DC143C")
      .setDescription(message)
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL());

    channel.send(embedCreated);
  };

  client.loadCommand = (commandName) => {
    try {
      client.logger.log(`Loading Command: ${commandName}`);
      const props = require(`../commands/${commandName}`);
      if (props.init) {
        props.init(client);
      }
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach((alias) => {
        client.aliases.set(alias, props.help.name);
      });
      return false;
    } catch (e) {
      return `Unable to load command ${commandName}: ${e}`;
    }
  };

  client.unloadCommand = async (commandName) => {
    let command;
    if (client.commands.has(commandName)) {
      command = client.commands.get(commandName);
    } else if (client.aliases.has(commandName)) {
      command = client.commands.get(client.aliases.get(commandName));
    }
    if (!command)
      return `The command \`${commandName}\` doesn"t seem to exist, nor is it an alias. Try again!`;

    if (command.shutdown) {
      await command.shutdown(client);
    }
    const mod =
      require.cache[require.resolve(`../commands/${command.help.name}`)];
    delete require.cache[
      require.resolve(`../commands/${command.help.name}.js`)
    ];
    for (let i = 0; i < mod.parent.children.length; i++) {
      if (mod.parent.children[i] === mod) {
        mod.parent.children.splice(i, 1);
        break;
      }
    }
    return false;
  };

  client.getSettings = (guild) => {
    client.settings.ensure("default", defaultSettings);
    if (!guild) return client.settings.get("default");
    const guildConf = client.settings.get(guild.id) || {};
    return { ...client.settings.get("default"), ...guildConf };
  };

  client.clean = async (client, text) => {
    if (text && text.constructor.name == "Promise") text = await text;
    if (typeof text !== "string")
      text = require("util").inspect(text, { depth: 1 });

    text = text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203))
      .replace(
        client.token,
        "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0"
      );

    return text;
  };

  Object.defineProperty(String.prototype, "toProperCase", {
    value: function () {
      return this.replace(
        /([^\W_]+[^\s-]*) */g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
    },
  });
};
