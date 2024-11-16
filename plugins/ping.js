const config = require('../config')
    const { commands, howls } = require('../command'); 

howls({
    pattern: "ping",
    desc: "Check Bot's Performance.",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const AmeenT = '📍ping...';
        m.react(config.wait);
        const start = new Date().getTime(); 
        const AmeenS = await conn.sendMessage(from, { text: AmeenT }, { quoted: mek });
        const end = new Date().getTime();
        const TripTime = end - start;
        const AmeenET = '*🍁ꜱᴩᴇᴇᴅ!* ' + TripTime + ' *ms*';
        await conn.sendMessage(from, { text: AmeenET, edit: AmeenS.key });
        m.react(config.done);
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
