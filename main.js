import dotenv from 'dotenv'
import Discord from 'discord.js'

dotenv.config()

const client = new Discord.Client()

if (client.login(process.env.BOT_TOKEN)) {
  console.log('Conectado!')
} else {
  console.log('Erro ao conectar!')
}

client.on('ready', () => {
  console.log(`Logado como ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'teste') {
    msg.reply('Mensagem de Teste!')
  }
})
