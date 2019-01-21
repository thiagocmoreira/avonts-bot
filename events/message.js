module.exports = (client, message) => {
  let isBot = message.author.bot
  if (isBot) return

  let isDm = message.channelType === 'dm'
  if (isDm) return

  let messageContent = message.content.toUpperCase()

  if (messageContent.includes('PIT') && !isBot) {
    message.reply('Pitanga ta cansaaaaadoon passou o dia todo na ruuuuan')
  }
}
