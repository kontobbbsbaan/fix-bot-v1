import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `\n`
let wibu = `https://telegra.ph/file/385cfe85ba26deda1726d.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, 'MAU SCRIPT NYA? CHAT OWNER BOT','Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://chat.whatsapp.com/FvDujLzzrQsGaJaRLVZ0Fg",
    mediaType: "IMAGE",
    description: "https://telegra.ph/file/385cfe85ba26deda1726d.jpg", 
    title: 'MODZ BOTZ MULTI DEVICE',
    body: 'MAU SCRIPT NYA? CHAT OWNER BOT',
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
