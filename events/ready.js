
module.exports = client => {
  console.log(`BOT iniciado para ${client.users.size} usuários, em ${client.channels.size} canais e em ${client.guilds.size} servidores`)
  client.user.setActivity('Counter-Strike: Glubal Ofensive')
}
