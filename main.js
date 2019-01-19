import fs from 'fs'
import Discord from 'discord.js'
import dotenv from 'dotenv'
import http from 'http'

dotenv.config()

const client = new Discord.Client()

fs.readdir('./events/', (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split('.')[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})

// if (client.login(process.env.bot_token)) {
if (client.login(process.env.BOT_TOKEN)) {
  console.log('Conectado!')
} else {
  console.log('Erro ao conectar!')
}

http.createServer().listen(3000)
