import { pitMessages, bntoMessages } from '../messages'

function getRandomMessage (messages) {
  let message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
  return message
}

function sendPitMessage (messageContent, message, isBot) {
  if (messageContent.includes('pit') && !isBot) {
    message.reply(getRandomMessage(pitMessages))
  }
}

function sendBntoMessage (messageContent, message, isBot) {
  if ((messageContent.includes('nito') || messageContent.includes('bnto') || messageContent.includes('nitin')) && !isBot) {
    message.reply(getRandomMessage(bntoMessages))
  }
}

module.exports = (client, message) => {
  let isBot = message.author.bot
  if (isBot) {
    return
  }

  let isDm = message.channelType === 'dm'
  if (isDm) {
    return
  }

  let messageContent = message.content.toLowerCase()

  sendPitMessage(messageContent, message, isBot)
  sendBntoMessage(messageContent, message, isBot)
}
