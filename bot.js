const Discord = require('discord.js')

const client = new Discord.Client()

client.on('ready', () => {

  console.log("Connected as " + client.user.tag)

})

bot_secret_token = "NTcyMTkxMzQyNDI4NTUzMjI3.XMYwHA.hZTplWokZlEZuGuYdX00cOlrQ_w"

client.login('NTcyMTkxMzQyNDI4NTUzMjI3.XMYwHA.hZTplWokZlEZuGuYdX00cOlrQ_w')
