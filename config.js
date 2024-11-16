const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://key-ninja7.vercel.app/Alive.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*Howls Dev Bot Alive💡*\n\n*DEVS STADIUM* Presents A Base Bot For Students🛠️",
OWNER_NAME: process.env.OWNER_NAME || "CALCIFER🎗️",
BOT_NAME: process.env.BOT_NAME || "HOWLS-DEV🕵🏻",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
wait: "⏳",
done: "✅",
fail: "❌"
};
