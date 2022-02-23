/*Coded by Tharindu Liyanage 
*/

const MyPnky = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('wallpaper');
if (Config.STANDPLK == 'off' || Config.STANDPLK == 'OFF') {
if (Config.WORKTYPE == 'public') {

    MyPnky.addCommand({pattern: 'panda', fromMe: true, desc: 'iPANDA menu'}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/P5Wmn9x/Pics-Art-22-02-22-16-36-51-127.png";
    r_text[1] = "https://i.ibb.co/P5Wmn9x/Pics-Art-22-02-22-16-36-51-127.png";
        var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '*ｉＰＡＮＤＡ*\n\n *💬.xmedia* \n📃️ get xmedia menu \n\n*💬️.song* \n📃️ To download songs by streaming service \n\n*💬️.tts* \n📃️ Get voice not any language \n☁ .tts good morning \n\n*💬️.attp* \n📃️ Get rainbow effect stickers \n☁ .attp hi \n\n*💬️.yt* \n📃️ Get youtube video links \n☁ .yt levitating \n\n*💬️*.video \n📃️ download youtube videos \n☁ .video <link> \n\n*💬.music* \n📃️ download videos and song \n☁ .music levitating \n\n*💬️.sticker* \n📃️ It converts your replied photo or video to sticker \n\n*💬️.photo* \n📃️ It converts your replied sticker to photo \n\n*💬️.short* \n📃️ Shorten the long link \n\n*💬️ .lyric* \n📃️ iPanda will find the lyrics of the song \n\n*💬️ .sing* \n📃️ sing the song you wrote \n☁ .sing levitating \n\n*💬️ .wiki* \n📃️ search on wikipedia \n☁ .wiki sri lanka \n\n*💬️ .covid* \n📃️ Shows the daily and overall covid table of more than 15 countries \n\n*💬️.whois* \n📃️ Displays metadata data of group or person \n\n*💬️.jid* \n📃️ Giving users whatsapp chat link \n\n*💬️.news* \n📃️ Get the global news \n\n*💬️.removebg* \n📃️ Removes the background of the photos \n\n*💬️.trt* \n📃️ It translates with Google Translate. You must reply any message \n☁ .trt en si(English to sinhala)\n\n*💬️.isong* \n📃️ download song in apple music \n\n*💬️.trumpsay* \n📃️ text to Trumps tweet (funny) \n\n*💬️.changesay* \n📃️ text to changesay meme \n\n*💬️.tagadmin* \n📃️ tags group admins \n\n*💬️.calc* \n📃️ calculations \n☁ .calc 69×69 \n\n*💬️.voicy* \n📃️ convert to audio to text \n\n*💬️ .img* \n📃️ Searches for related pics on Google (beta test) \n☁ .img car wallpapers \n\n*💬️ .animesay* \n📃️ random anime pics \n\n*💬️.weather* \n📃️ show weather report ☁ .weather rajagiriya \n\n*💬️.sweather* \n📃️ show space weather report \n\n*💬️.movie* \n📃️ Show movie informations \n☁ .movie godzilla \n\n*💬️.number* \n📃️ get number the deployer or developer \n\n*💬️.ss* \n📃️ Takes a screenshot from the page in the given link \n\n*💬️.mp3* \n📃️ Convert video to sound recording \n\n*💬️.dict* \n📃️ Use it as a dictionary \n\n*💬️.owner* \n📃️ show bot details \n\n*💬️.ffmpeg* \n📃️ Applies the desired ffmpeg filter to the video \n\n*💬️.scan* \n📃️ Guess the language of the replied message \n\n*💬️ .currency* \n📃️ show currency info \n\n*💬️ .github* \n📃️ Collects github information from the given username \n☁ .github Zenoixnoize \n\n*💬️ .sysd* \n📃️ show the server properties \n\n*💬️.project* \n📃️ show program contributors \n\n*💬️ .tblend* \n📃️ Applies the selected TBlend effect to videos \n\n*💬️.speedtest* \n📃️ test server speedtest \n\n*💬️ .report* \n📃️ report group memeber \n\n\n\n*𝗜𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 💬* \n📄 You must place a dot(.) at the beginning of the command \n📄 The letters in the command should be lowercase \n\n\n\n*𝗛𝗼𝘄 𝘁𝗼 𝗰𝗿𝗲𝗮𝘁 𝗼𝘄𝗻 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗯𝗼𝘁 🐼*\n💬 https://github.com/Zenoixnoize/CREAT-WHATSAPP-BOT/blob/main/README.md \n📄 You can easily and quickly create this for anyone without any programming knowledge\n\n\n\n *𝗶𝗣𝗔𝗡𝗗𝗔 🐼* \n📡 iPanda Bot is a free open source program \n📡 Inspired by Garfield Bot \n📡 This does nothing for your privacy \n📡 You can change it in any way \n📡 Developers do not get any benefit from this. Only self-satisfaction is obtained \n📡 This is updated and developed day by day \n📡 You can also get this from the telegram - https://t.me/ipandx \n📡 You cant get obscene stuff out of this \n\n*𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙈𝙀𝙉𝙏* \n\n📡 𝗩𝗜𝗛𝗔𝗡𝗚𝗔 𝗡𝗘𝗧𝗛𝗠𝗜𝗡𝗔 \n\n📡 𝗧𝗛𝗔𝗥𝗜𝗡𝗗𝗨 𝗟𝗜𝗬𝗔𝗡𝗔𝗚𝗘 '})

    }));
