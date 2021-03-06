const { Command } = require('chop-tools');

const pick = arr => arr[Math.floor(Math.random() * arr.length)];

const classList = require('../../config/constants').DISCORD_SERVERS;

const classEmojis = {};
Object.keys(classList).forEach((c) => {
  classEmojis[c] = classList[c].emoji;
});
classEmojis.Priest = '<:priest:623133443940941835>';
classEmojis.Mystic = '<:mystic:623133444121165825>';

module.exports = new Command({
  name: 'roll',
  description:
    "Do you want to roll a new character in Tera but don't know what class to pick? Let Chop pick for you.",
  category: 'tera',
  async run(message, args) {
    // the numbers here are indexes on the races array
    const classes = [
      ['Archer', [0, 1, 2, 3, 4, 5, 6]],
      ['Berserker', [0, 1, 2, 3, 4, 5, 6]],
      ['Brawler', [3, 5, 6]],
      ['Gunner', [2, 3, 4]],
      ['Lancer', [0, 1, 2, 3, 4, 5, 6]],
      ['Mystic', [0, 1, 2, 3, 4, 5, 6]],
      ['Ninja', [3]],
      ['Priest', [0, 1, 2, 3, 4, 5, 6]],
      ['Reaper', [3]],
      ['Slayer', [0, 1, 2, 3, 4, 5, 6]],
      ['Sorcerer', [0, 1, 2, 3, 4, 5, 6]],
      ['Valkyrie', [2]],
      ['Warrior', [0, 1, 2, 3, 4, 5, 6]],
    ];

    // the numbers here are indexes on the genders array
    const races = [
      ['Aman', [0, 1]],
      ['Baraka', [1]],
      ['Castanic', [0, 1]],
      ['Elin', [0]],
      ['High Elf', [0, 1]],
      ['Human', [0, 1]],
      ['Popori', [1]],
    ];

    const genders = ['Female', 'Male'];

    const format = (pGender, pRace, pClass) => {
      let formatted = classEmojis[pClass[0]];
      if (pGender) formatted += `${pGender} `;
      formatted += `${pRace[0]} `;
      formatted += pClass[0];
      return formatted;
    };

    const pickedClass = pick(classes);
    const pickedRace = races[pick(pickedClass[1])];
    const pickedGender = ['Gunner', 'Valkyrie'].includes(pickedClass[0])
      || ['Elin', 'Popori', 'Baraka'].includes(pickedRace[0])
      ? 0
      : genders[pick(pickedRace[1])];

    message.channel.send(
      `Your next character shall be a **${format(pickedGender, pickedRace, pickedClass)}**`,
    );
  },
});
