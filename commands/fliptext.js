exports.run = async (client, message, args) => {
  message.delete();

  if(!args[0])return message.channel.send(`Please add a message that you want to flip.`)
  
  const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
  const OFFSET = '!'.charCodeAt(0);
  message.channel.send(
      args.join(' ').split('')
        .map(c => c.charCodeAt(0) - OFFSET)
        .map(c => mapping[c] || ' ')
        .reverse().join('')
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "fliptext",
  category: "Misc",
  description: "Sends a message but in flipped text (input required)",
  usage: "fliptext {input}",
};