// Hi Buddy,
// Edit Anything Here Except ones Indicated "DO NOT"...
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.caption = "*©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*"; // Input Yours custom...(Maintain font for Flow)
global.api = "https://api.giftedtech.web.id/api"; // DO NOT Change this...
global.session = "https://pairing.giftedtech.web.id"; // DO NOT Change this....
global.footer = "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ*"; // Input Yours custom...(Maintain font for Flow)
global.ytdl = "https://ytdl.giftedtech.web.id"; // You Can Change this...
global.giftedCdn = "https://cdn.giftedtech.web.id";
global.sessionServer = "https://creds.giftedtech.web.id";
global.giftedRepo = "https://github.com/mauricegift/gifted-md";
global.giftedApiRepo = "https://api.github.com/repos/mauricegift/gifted-md";


 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Gifted~H4sIAAAAAAAAA5VU2bKiSBD9l3rVaHYBI27EIG6IC4q4TcxDCYWUrFYVKHb47xN4r307omd67vBUJEXmOSdP5neQ5ZgiG9Wg+x0UBFeQoebI6gKBLuiVYYgIaIMAMgi6YODAmapx285NuLOxpeEskE2SsHWnIvUq5YNp2HNadkx44w082qAojwn2f5OQk+8z41K5C033V9uDOIOqw92JcHSYNzt44Xl9V3YaxGvp9AYeTUaICc5OgyJCKSIwsVHtQEy+Bl+eJtZerZZV7lrpPS9ZgefFIZKDQTwUEobOh3hUteZIi+WvwQ+9Y06gcF/ckuvmnOubhVGEF3d1DC6z0SgW0eqyWE3JMc4+4FN8ylBgBShjmNVf1n1prQ+Wpu1a7lHRZUkRA3dbDxTiytHmTlqpVgejdaw6V5H/GvDqcKTuquVn9vUyEvWKm8y24xj6gr2xb/XF2I7dLBtKqSjSn4E75OWV+P/oTic4xnfkOco4pbYjhjeuigejSaQXq0CmjN71gMtaVo/PvwYft67lJSp8b7vmotQKNwOMUGxPtpJXFjhea8Gwj/rCwBBmn/AhK8nvzV1shShzplU8i/Kb3tJN6qS5g+/a1Rtne2rNhKil7aLb+JBku9RxbkVHNCNNqQMauea1Hm2E49x0FDhtneY9lgp27/T2ZBSj2gpAV3i0AUEnTBmBDOdZE1OlNoBB5SKfIPZUF1z0RaxkNb1NklqrKNE4rzOHYWBBOXLqvi/Xe2hMM15Wr2+gDQqS+4hSFIwxZTmpZ4hSeEIUdP98NqrhTFCaMzTBAegCUemosqgJvKjzf9Bv1wgyCoviW4YYaIOQ5OkMgS4jJWqD5w9CXxB6YmfQUyXJUGVeUzRVGggdQdcMTR5qDcP0vegap4gymBagK6gKL/CSxMuPv9ogQzf2bp+GtCS0QYgJZV5WFkkOg5e3Xh+h7+dlxtw6883mgAjo8p9hxBjOTrRhVmaQ+BGukNnwAN0QJhT90BkRFLy4fOwOMw+a9g+GS7nTEQTQYG8S/aJNtyP9Kk/yvKbpiiryqq6pmtiRmotN/PEDYJMvQAzihIIuMC2nz1lWb+Aci6tvjUaGdTLMkwE+Cb38+W6As69MRK613VoVPxlG3uFWlGKVqaXFieWpas0UTdQKs1gurbd/SAK6oPTUzVq/hiktyH5+sPqxnydcq3DORpnKt2taD3Yqb9mWXvj7w1iATr0+z/3h/ZxzC6NON3a+ScvBvJ73+uNFdahvs3X/+tZUC1CFffRzMXIcGVDpVR5vu6Fmoc28lO7ZfR3NT72Y5pvUVaBdkpvtlfSwOMRRn9yGvWo4DvdbhdtG6m6dhCzwh6rhabtFoF6O8WtynpObfGxM/GFq/HwNMXouoAw2Dfzv1r0DbxzGP9o/5fhYaf+yFnp7aeEGFZckeKqbq/1m5MMjI0pLxY5O8il3XoTzyl5evIEJHo3ViwSyMCcp6AKYBSTHAWgDkpeNZa0szH9TzDR4yzTemSeQMuNzDH6dLFFX3m85JC/GkEaNCI6wj8LG07VRFC6D7DVVwGgeazkDj78Bl09EofcHAAA=", // Add sess Id here especially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || false, // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by Gifted-Md!", // // Input Yours custom...
MODE: process.env.MODE || "private ", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "254715206562", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃💜", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "5.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "true",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃", // Input Yours custom...(Maintain font for Flow)
BOT_PIC: process.env.BOT_PIC || "https://files.giftedtech.web.id/file/gifted-md.jpg", // You can Replace with yours...
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "Gifted creates things that creates other things",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "212,79", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
