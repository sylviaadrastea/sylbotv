/*

Kalu Error Bilang Ke Wa Di Bawah
Base Ori KirBotz
Script Bot Ori KirBotz
No Enc? Buy Bang Di Pembuat Sc Nya Nih Nomor Wa Nya
wa.me/6287705048235
Note❗Selain Di Atas Clone

*/
const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const { color, bgcolor } = require('../V2/color')
const { getGroupAdmins, getBuffer } = require('../V2/functions')

module.exports = welcome = async (Akira, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./V3/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    groupMet = await Akira.groupMetadata(anu.jid)
                groupMembers = groupMet.participants
                groupAdmins = getGroupAdmins(groupMembers)
			    mem = anu.participants[0]
			    console.log(anu)
                try {
               pic = await Akira.getProfilePicture(mem)
                } catch (e) {
                pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
                pp_grup = await Akira.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
             }
            if (anu.action == 'add' && mem.includes(Akira.user.jid)) {
            Akira.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot, Tolong Jadikan Admin Ya, Ketik .menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(Akira.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await Akira.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
               groupName = mdata.subject
                let v = Akira.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
              teks = `Haloo *@${mem.split('@')[0]}* selamat datang di group *${groupName}* semoga betah\n\nkamu bisa langsung berkomunikasi denganku dengan cara ketik .menu`
              buff = await getBuffer(pic)
               Akira.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `satu orang telah bergabung di group ${groupName}`, buttons: [{buttonId: `.selamatdatang`,buttonText:{displayText: 'WELCOME'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		}
            if (anu.action == 'remove' && !mem.includes(Akira.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await Akira.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = Akira.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                groupName = mdata.subject
                out = `selamat tinggal\n*@${num.split('@')[0]}* telah memutuskan untuk keluar dari group *${groupName}* , semoga ia tenang di sana`
               buff = await getBuffer(pic)
               Akira.sendMessage(mdata.id, { contentText: `${out}`, footerText: `satu orang telah meninggalkan group ${groupName}`, buttons: [{buttonId: `.bay`,buttonText:{displayText: 'BYE'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'pink'))
		}
	}
