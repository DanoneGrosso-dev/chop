// TODO: lol
const validEmojis = [
  '😮',
  '🙌',
  '🐝',
  '💬',
  '🐾',
  '🔔',
  '💠',
  '🐆',
  '🉑',
  '🔴',
  '😪',
  '💰',
  '🐀',
  '🚡',
  '🌷',
  '🐂',
  '🐏',
  '🚿',
  '🎷',
  '🌌',
  '🕑',
  '🉐',
  '⛎',
  '📙',
  '👅',
  '🎱',
  '😞',
  '🔟',
  '🐛',
  '🚍',
  '🔹',
  '💵',
  '🆙',
  '🙉',
  '💩',
  '🔂',
  '👰',
  '🍵',
  '🎋',
  '💱',
  '🌝',
  '💷',
  '🍳',
  '🚠',
  '💩',
  '🔐',
  '😲',
  '🚗',
  '🍬',
  '📅',
  '🔠',
  '🔼',
  '📉',
  '🚫',
  '🍺',
  '🌉',
  '🍚',
  '🚭',
  '🍠',
  '🌙',
  '💥',
  '📛',
  '🕔',
  '🚬',
  '😾',
  '🌛',
  '🍪',
  '🍁',
  '🌆',
  '🎰',
  '🍴',
  '📴',
  '💙',
  '🚑',
  '👟',
  '🌾',
  '🚟',
  '👠',
  '🍓',
  '❎',
  '🔕',
  '💨',
  '✊',
  '🐁',
  '🌏',
  '🌔',
  '🐊',
  '😤',
  '🍔',
  '💄',
  '🌄',
  '📢',
  '🏮',
  '🍄',
  '😽',
  '💦',
  '🎌',
  '🔷',
  '📲',
  '⏰',
  '📂',
  '💡',
  '😟',
  '🐥',
  '🐻',
  '🏫',
  '👏',
  '🍩',
  '👦',
  '🆕',
  '🎆',
  '🍶',
  '😎',
  '👶',
  '📝',
  '🍏',
  '🔳',
  '🐄',
  '🚦',
  '🐉',
  '📐',
  '💭',
  '💯',
  '🔲',
  '👋',
  '🍜',
  '😐',
  '🚔',
  '🏭',
  '⚪',
  '🐦',
  '👀',
  '🐋',
  '😸',
  '🙀',
  '📨',
  '🚞',
  '👃',
  '👴',
  '🐑',
  '🏪',
  '🏆',
  '🎦',
  '🍃',
  '💳',
  '🚈',
  '😷',
  '👽',
  '😴',
  '👿',
  '👝',
  '🏂',
  '😔',
  '🍗',
  '📔',
  '🐤',
  '🐓',
  '🔄',
  '😧',
  '💞',
  '🐶',
  '🍹',
  '🐮',
  '🍢',
  '👛',
  '🎥',
  '🕞',
  '🐢',
  '👩',
  '📣',
  '👙',
  '📰',
  '🐜',
  '😺',
  '🎑',
  '🏉',
  '🌞',
  '🈶',
  '🏁',
  '🍻',
  '📟',
  '🌜',
  '🌓',
  '💐',
  '🚯',
];

function randomEmoji(count) {
  let validatedCount;
  if (!count) validatedCount = 1;
  if (count && Number.isNaN(Number(count))) validatedCount = 1;
  if (count && !Number.isNaN(Number(count))) validatedCount = Number(count);
  if (validatedCount <= 0) validatedCount = 1;
  if (validatedCount > validEmojis.length) validatedCount = validEmojis.length;
  const uniqueEmojis = new Set();
  while (uniqueEmojis.size < validatedCount) {
    uniqueEmojis.add(validEmojis[Math.floor(Math.random() * validEmojis.length)]);
  }
  return [...uniqueEmojis];
}

randomEmoji.MAX_EMOJI = validEmojis.length;

module.exports = randomEmoji;
