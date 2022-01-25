const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Ilman;;;'
                    + 'FN:Hafizz\n' // full name
                    + 'ORG:Hafizz;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6285892842367:+62 858-9284-2367\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Hafizz', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler