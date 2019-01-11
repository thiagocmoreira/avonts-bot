import fs from 'fs'
import Discord from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new Discord.Client()

fs.readdir('./events/', (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split('.')[0]
    client.on(eventName, arg => eventHandler(client, arg))
  })
})

if (client.login(process.env.BOT_TOKEN)) {
  console.log('Conectado!')
} else {
  console.log('Erro ao conectar!')
}

// client.on('message', msg => {
//   if (msg.content.includes('teste')) {
//     msg.reply('FLÊ')
//   }
// })

// client.on('guildMemberAdd', member => {
//   member.send('Seja bem vindo ao Servidor!')
// })
