let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: YogaBOT
╠➥ Script: Nurutomo
║
╠➥ Github: -
╠➥ Instagram: -
╠➥ YouTube: -
║
╠═〘 Thanks To 〙 ═
╠➥ Nurutomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ SmartFren: 0882-0094-96234
╠➥ Dana: 0882-0094-96234
╠➥ Gopay: 0882-0094-96234
║
║>Request? Wa.me/62882009496234
║
╠═〘 YogaBOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

