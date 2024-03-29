const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  message.delete();

  var list = [
    "You're an awesome friend.",
    "You're a gift to those around you.",
    "You're a smart cookie.",
    "You are awesome!",
    "You have impeccable manners.",
    "I like your style.",
    "You have the best laugh.",
    "I appreciate you.",
    "You are the most perfect you there is.",
    "You are enough.",
    "You're strong.",
    "Your perspective is refreshing.",
    "I'm grateful to know you.",
    "You light up the room.",
    "You deserve a hug right now.",
    "You should be proud of yourself.",
    "You're more helpful than you realize.",
    "You have a great sense of humor.",
    "You've got an awesome sense of humor!",
    "You are really courageous.",
    "Your kindness is a balm to all who encounter it.",
    "You're all that and a super-size bag of chips.",
    "On a scale from 1 to 10, you're an 11.",
    "You are strong.",
    "You're even more beautiful on the inside than you are on the outside.",
    "You have the courage of your convictions.",
    "I'm inspired by you.",
    "You're like a ray of sunshine on a really dreary day.",
    "You are making a difference.",
    "Thank you for being there for me.",
    "You bring out the best in other people.",
    "Your ability to recall random factoids at just the right time is impressive.",
    "You're a great listener.",
    "How is it that you always look great, even in sweatpants?",
    "Everything would be better if more people were like you!",
    "I bet you sweat glitter.",
    "You were cool way before hipsters were cool.",
    "That color is perfect on you.",
    "Hanging out with you is always a blast.",
    "You always know -- and say -- exactly what I need to hear when I need to hear it.",
    "You help me feel more joy in life.",
    "You may dance like no one's watching, but everyone's watching because you're an amazing dancer!",
    "Being around you makes everything better!",
    "When you say, I meant to do that, I totally believe you.",
    "When you're not afraid to be yourself is when you're most incredible.",
    "Colors seem brighter when you're around.",
    "You're more fun than a ball pit filled with candy. (And seriously, what could be more fun than that?)",
    "That thing you don't like about yourself is what makes you so interesting.",
    "You're wonderful.",
    "You have cute elbows. For reals!",
    "Jokes are funnier when you tell them.",
    "You're better than a triple-scoop ice cream cone. With sprinkles.",
    "When I'm down you always say something encouraging to help me feel better.",
    "You are really kind to people around you.",
    "You're one of a kind!",
    "You help me be the best version of myself.",
    "If you were a box of crayons, you'd be the giant name-brand one with the built-in sharpener.",
    "You should be thanked more often. So thank you!!",
    "Our community is better because you're in it.",
    "Someone is getting through something hard right now because you've got their back. ",
    "You have the best ideas.",
    "You always find something special in the most ordinary things.",
    "Everyone gets knocked down sometimes, but you always get back up and keep going.",
    "You're a candle in the darkness.",
    "You're a great example to others.",
    "Being around you is like being on a happy little vacation.",
    "You always know just what to say.",
    "You're always learning new things and trying to better yourself, which is awesome.",
    "If someone based an Internet meme on you, it would have impeccable grammar.",
    "You could survive a Zombie apocalypse.",
    "You're more fun than bubble wrap.",
    "When you make a mistake, you try to fix it.",
    "Who raised you? They deserve a medal for a job well done.",
    "You're great at figuring stuff out.",
    "Your voice is magnificent.",
    "The people you love are lucky to have you in their lives.",
    "You're like a breath of fresh air.",
    "You make my insides jump around in the best way.",
    "You're so thoughtful.",
    "Your creative potential seems limitless.",
    "Your name suits you to a T.",
    "Your quirks are so you -- and I love that.",
    "When you say you will do something, I trust you.",
    "Somehow you make time stop and fly at the same time.",
    "When you make up your mind about something, nothing stands in your way.",
    "You seem to really know who you are.",
    "Any team would be lucky to have you on it.",
    "In high school I bet you were voted most likely to keep being awesome.",
    "I bet you do the crossword puzzle in ink.",
    "Babies and small animals probably love you.",
    "If you were a scented candle they'd call it Perfectly Imperfect (and it would smell like summer).",
    "There's ordinary, and then there's you.",
    "You're someone's reason to smile.",
    "You're even better than a unicorn, because you're real.",
    "How do you keep being so funny and making everyone laugh?",
    "You have a good head on your shoulders.",
    "Has anyone ever told you that you have great posture?",
    "The way you treasure your loved ones is incredible.",
    "You're really something special.",
    "Thank you for being you.",
    "Your smile is contagious.",
    "I bet you make babies smile.",
    "You have the best laugh.",
    "You light up the room.",
    "You have a great sense of humor.",
    "If cartoon bluebirds were real, a couple of 'em would be sitting on your shoulders singing right now.",
    "You're like sunshine on a rainy day.",
    "You bring out the best in other people.",
    "I bet you sweat glitter.",
    "Colors seem brighter when you're around.",
    "You're more fun than a ball pit filled with candy.",
    "Jokes are funnier when you tell them.",
    "You always know how to find that silver lining.",
    "You're a candle in the darkness.",
    "Being around you is like a happy little vacation.",
    "You're more fun than bubble wrap.",
    "You're like a breath of fresh air.",
    "You're someone's reason to smile.",
    "How do you keep being so funny and making everyone laugh?",
  ];

  if (talkedRecently.has(message.author.id)) {
    message.reply(
      "please wait 30 seconds before typing this command again, thank you!"
    );
  } else {
    var compliment = list[Math.floor(Math.random() * list.length)];
    const complimentEmbed = new Discord.MessageEmbed()
      .setAuthor("COMPLIMENT")
      .setDescription(compliment)
      .setColor(`#00FFFF`);
    message.channel.send(complimentEmbed);
  }

  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 30000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "compliment",
  category: "Misc",
  description: "Get a compliment from Scarlett.",
  usage: "compliment",
};
