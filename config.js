const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "390683940167";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_44_10_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMwLFxuICAgICAgICA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICA4NixcbiAgICAgICAgNjEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5LFxuICAgICAgICA3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDczLFxuICAgICAgICAzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDY4LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDgxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgwLFxuICAgICAgICA2NixcbiAgICAgICAgMTczLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU5LFxuICAgICAgICA2MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm44MmNjVi90bERLdXBwQUc3bzY5Ym9hRWxKME45YTZTUEZWVnBYVTdEL1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMzkwNjgzOTQwMTY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0RDgzNEYxMkVDMjdBMjU2NUU5ODRBQTBEMTdDQkRDNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjg5MjQyNDFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0FRMlQxMGlSZHF3VGExN1lQVkdzZ1wiLFxuICBcInBob25lSWRcIjogXCIxNTFiNzI0YS1mZDVjLTQ3ZTQtODgyYy1hY2ZmMjI4OWVhNmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgMTA1LFxuICAgICAgMjU0LFxuICAgICAgNixcbiAgICAgIDQ0LFxuICAgICAgNTgsXG4gICAgICAyMzEsXG4gICAgICAxNDIsXG4gICAgICAyMTYsXG4gICAgICAxNjMsXG4gICAgICAxMjUsXG4gICAgICA4MSxcbiAgICAgIDIyNCxcbiAgICAgIDU4LFxuICAgICAgMzEsXG4gICAgICA1NixcbiAgICAgIDIxNyxcbiAgICAgIDIyOCxcbiAgICAgIDE0NCxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOCxcbiAgICAgIDU5LFxuICAgICAgMTgsXG4gICAgICA0MyxcbiAgICAgIDU1LFxuICAgICAgNDUsXG4gICAgICA0NSxcbiAgICAgIDE2NSxcbiAgICAgIDIzMyxcbiAgICAgIDE4LFxuICAgICAgNDgsXG4gICAgICAyMTMsXG4gICAgICA5NixcbiAgICAgIDE1NyxcbiAgICAgIDYwLFxuICAgICAgOTcsXG4gICAgICAyMzIsXG4gICAgICA5OCxcbiAgICAgIDIyNixcbiAgICAgIDE2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJESEI1UVBSU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMzkwNjgzOTQwMTY3OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NjEzNTk0NzAzMDUyODo2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIi4uIPCfmqtcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKTG5vN1FIRU11VXRiZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjRhRHVxRldyZkJZMVUvWko2ZjBVNUVEUVhvem5RNFNOeHppQklxY2Q0bnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicStFemh1R1FQWFh6OXJzWkJiZG14R0lqb1BEQnlDc1FzSHcxeE9Dbk9qeDFaWGdvSWVHdkhNSzFyTW5KSW8vS1VINTg4NldrKzR5aklXNmg5S3FNQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSXZKd1c3cWo4aWIwTmFuK3dieDVqV2lic3FoZFNQQ3BHUWhLVUtlOVFpNFF2Qm5waE5wK2lKMTg4WUJha1c2aVdBK3cxd3ZXK2NJd0g0YTBHR3Zoamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMzkwNjgzOTQwMTY3OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg5MjQyMzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGcEdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZwRy5qc29uIjogIntcImtleURhdGFcIjpcIksxSTdhOVJQYXhMQjhWdGRHTXJ4N0hGZlBOaHVSSEVvWW9zVDU1aDk4MUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk4ODY4NjczOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI4OTI0MjQxMTc0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
