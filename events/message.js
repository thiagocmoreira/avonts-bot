module.exports = (client, message) => {
  let messageContent = message.content.toUpperCase()
  console.log(messageContent)

  if (messageContent.includes('PIT')) {
    message.reply('Pitanga ta cansaaaaadoon passou o dia todo na ruuuuan')
  }
}
