const Discord = require('discord.js')

const client = new Discord.Client()

client.on('ready', () => {

    // Set bot status to: "Playing with JavaScript"

    client.user.setActivity("On LQLoL Discord Server", {type: "PLAYING"})

    // Alternatively, you can set the activity to any of the following:

    // PLAYING, STREAMING, LISTENING, WATCHING

    // For example:

    // client.user.setActivity("TV", {type: "WATCHING"})

})

client.login("NTcyMTkxMzQyNDI4NTUzMjI3.XMYwHA.hZTplWokZlEZuGuYdX00cOlrQ_w")
