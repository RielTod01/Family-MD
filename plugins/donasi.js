const qrku = "https://i.ibb.co/MnbqZ0N/qr-Aguz-Familia-07-06-22-1654614928.png"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
│ • 𝐀𝐗𝐈𝐒 [083813417529]
│ • 𝐃𝐀𝐍𝐀  [083813417529]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6281320170984
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS/PANEL* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
