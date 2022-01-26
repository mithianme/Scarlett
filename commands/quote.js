const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  message.delete();

  var list = [
    "A leader must have the courage to act against an expert's advice..",
    "A word to the wise ain't necessary, it's the stupid ones who need the advice..",
    "Advice is one of those things it is far more blessed to give than to receive..",
    "Advice is what we ask for when we already know the answer but wish we didn't..",
    "Always do right--this will gratify some and astonish the rest. message to Young People's Society, Greenpoint Presbyterian Church, Brooklyn, New York, February 16, 1901.",
    "Anyone who proposes to do good must not expect people to roll stones out of his way, but must accept his lot calmly if they even roll a few more upon it.",
    "Beware of over-great pleasure in being popular or even beloved.",
    "Do-so is more important than say-so..",
    "Dying is a very dull, dreary affair. And my advice to you is to have nothing whatever to do with it.",
    "Finish each day and be done with it. You have done what you could; some blunders and absurdities have crept in; forget them as soon as you can. Tomorrow is a new day; you shall begin it serenely and with too high a spirit to be encumbered with your old nonsense..",
    "Go put your creed into the deed, Nor speak with double tongue..",
    "Good advice is always certain to be ignored, but that's no reason not to give it.",
    "Good things, when short, are twice as good..",
    "Grace must find expression in life, otherwise it is not grace..",
    "Had I been present at the creation, I would have given some useful hints for the better ordering of the universe. 13th century.",
    "He only profits from praise who values criticism..",
    "He that gives good advice, builds with one hand; he that gives good counsel and example, builds with both; but he that gives good admonition and bad example, builds with one hand and pulls down with the other..",
    "He who is too busy doing good finds no time to be good..",
    "I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes.",
    "I have found the best way to give advice to your children is to find out what they want and then advise them to do it.",
    "I have yet to hear a man ask for advice on how to combine marriage and a career.",
    "I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.",
    "I shall tell you a great secret my friend. Do not wait for the last judgement, it takes place every day.",
    "If better were within, better would come out..",
    "If I had to give young writers advice, I would say don't listen to writers talking about writing or themselves.",
    "If it is not right do not do it; if it is not true do not say it.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "It is a mistake to suppose that men succeed through success; they much oftener succeed through failures. Precept, study, advice, and example could never have taught them so well as failure has done.",
    "It is easy when we are in prosperity to give advice to the afflicted.",
    "It takes a village to raise a child.",
    "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. The consciousness of loving and being loved brings a warmth and richness to life that nothing else can bring..   ",
    "Never do things others can do and will do, if there are things others cannot do or will not do..",
    "One's first step in wisdom is to question everything - and one's last is to come to terms with everything.",
    "People spend a lifetime searching for happiness; looking for peace. They chase idle dreams, addictions, religions, even other people, hoping to fill the emptiness that plagues them. The irony is the only place they ever needed to search was within..",
    "People who fight fire with fire usually end up with ashes.",
    "Recently a young mother asked for advice. What, she wanted to know, was she to do with a 7-year-old who was obstreperous, outspoken, and inconveniently willful? Keep her, I replied.... The suffragettes refused to be polite in demanding what they wanted or grateful for getting what they deserved. Works for me..",
    "Take care that you never spell a word wrong. Always before you write a word, consider how it is spelled, and, if you do not remember, turn to a dictionary. It produces great praise to a lady to spell well. to his daughter Martha.",
    "Take it easy -- but take it.",
    "The only thing to do with good advice is pass it on. It is never any use to oneself.",
    "Too bad that all the people who really know how to run the country are busy driving taxi cabs and cutting hair.",
    "We should be careful and discriminating in all the advice we give. We should be especially careful in giving advice that we would not think of following ourselves. Most of all, we ought to avoid giving counsel which we don't follow when it damages those who take us at our word..",
    "Whatever advice you give, be brief.",
    "Whatever you do, you need courage. Whatever course you decide upon, there is always someone to tell you that you are wrong. There are always difficulties arising that tempt you to believe your critics are right. To map out a course of action and follow it to an end requires some of the same courage that a soldier needs. Peace has its victories, but it takes brave men and women to win them..",
    "When women are the advisers, the lords of creation don't take the advice till they have persuaded themselves that it is just what they intended to do; then they act upon it, and if it succeeds, they give the weaker vessel half the credit of it; if it fails, they generously give her the whole. in Little Women.",
    "Write it on your heart that every day is the best day in the year. No man has learned anything rightly, until he knows that every day is Doomsday.",
    "In dreams and in love there are no impossibilities.",
    "In dreams and in love there are no impossibilities.",
    "Love is composed of a single soul inhabiting two bodies.",
    "I love you, not only for what you are, But for what I am when I am with you.",
    "Love is that condition in which the happiness of another person is essential to your own.",
    "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
    "Make me immortal with a kiss.",
    "In the arithmetic of love, one plus one equals everything, and two minus one equals nothing.",
    "Life has taught us that love does not consist in gazing at each other, but in looking outward together in the same direction.",
    "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
    "There is only one happiness in life, to love and be loved.",
    "I am my beloved, and my beloved is me.",
    "Love is friendship set on fire.",
    "To be your friend was all I ever wanted; to be your lover was all I ever dreamed.",
    "The most precious possession that ever comes to a man in this world is a woman's heart",
    "The most wonderful of all things in life is the discovery of another human being with whom one's relationship has a growing depth, beauty and joy as the years increase. This inner progressiveness of love between two human beings is a most marvelous thing; it cannot be found by looking for it or by passionately wishing for it. It is a sort of divine accident, and the most wonderful of all things in life.",
    "Love means to commit oneself without guarantee, to give oneself completely in the hope that our love will produce love in the loved person. Love is an act of faith, and whoever is of little faith is also of little love.",
    "You come to love not by finding the perfect person, but by seeing an imperfect person perfectly.",
    "True love begins when nothing is looked for in return.",
    "For every beauty there is an eye somewhere to see it. ",
    "For every truth there is an ear somewhere to hear it. For every love there is a heart somewhere to receive it.",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    "To get the full value of joy you must have someone to divide it with.",
    "When you are in Love you can't fall asleep because reality is better than your dreams.",
    "Some of the greater things in life are unseen thats why you close your eyes when you kiss, cry, or dream.",
    "If you love something, let it go. If it comes back to you, its yours forever. If it dosent, then it was never meant to be.",
    "If you judge people, you have no time to love them.",
    "Women wish to be loved not because they are pretty, or good, or well bred, or graceful, or intelligent, but because they are themselves.",
    "Falling in love is awfully simple, but falling out of love is simply awful.",
    "To the world you are one person, but to one person you are the world.",
    "Don’t say you love me unless you really mean it, because I might do something crazy like believe it.",
    "Don't find love, let love find you. That's why it's called falling in love, because you don't force yourself to fall, you just fall.",
    "Lucky is the man who is the first love of a woman, but luckier is the woman who is the last love of a man.",
    "Love is like heaven, but it can hurt like hell.",
    "Love... What is love? Love is to love someone for who they are, who they were, and who they will be.",
    "Love is a language spoken by everyone, but understood only by a heart.",
    "How on earth are you ever going to explain in terms of chemistry and physics so important a biological phenomenon as first love?",
    "The Grand essentials of happiness are: something to do, something to love, and something to hope for.",
    "Love: a temporary insanity, curable by marriage.",
    "Love never dies a natural death. It dies because we don't know how to replenish its source. It dies of blindness and errors and betrayals. It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings.",
    "If you have love in your life it can make up for a great many things you lack. If you don't have it, no matter what else there is, it's not enough.",
    "Love life and life will love you back. Love people and they will love you back.",
    "Love and kindness are never wasted. They always make a difference. They bless the one who receives them, and they bless you, the giver.",
    "The good life is inspired by love and guided by knowledge.",
    "Tell me who admires and loves you, and I will tell you who you are.",
    "We need not think alike to love alike.",
    "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    "The demand to be loved is the greatest of all arrogant presumptions.",
    "Love is an emotion experienced by the many and enjoyed by the few.",
    "The sage said, The best thing is not to hate anyone, only to love. That is the only way out of it. As soon as you have forgiven those whom you hate, you have gotten rid of them. Then you have no reason to hate them; you just forget.",
    "Love is the only force capable of transforming an enemy into friend.",
  ];

  if (talkedRecently.has(message.author.id)) {
    message.reply(
      "please wait 30 seconds before using this command again, thank you!"
    );
  } else {
    var quote = list[Math.floor(Math.random() * list.length)];
    const quoteEmbed = new Discord.MessageEmbed()
      .setAuthor("QUOTE")
      .setDescription(quote)
      .setColor(`#00FFFF`);
    message.channel.send(quoteEmbed);
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
  name: "quote",
  category: "Misc",
  description: "Sends a random quote.",
  usage: "quote",
};
