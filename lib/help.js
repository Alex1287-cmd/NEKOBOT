const help = (prefix) => {
	return `
╔══✪〘 INFORMATION 〙✪══
║
╠➥ NEKOBOT
╠➥ V 1.0
╠➥ CREATOR : Alex1287-cmd 
╠➥ wa.me/628881393308
║
╠══✪〘 LIST MENU 〙✪══
║
╠➥ *#ownermenu*
╠➥ *#adminmenu*
╠➥ *#groupmenu*
╠➥ *#praymenu*
╠➥ *#mediamenu*
╠➥ *#kerangmenu*
╠➥ *#downloadmenu*
╠➥ *#othermenu*
╚═〘 NEKO BOT 〙
`
}
exports.help = help()
function ownercmd() {
    return `
╔══✪〘 OWNER 〙✪══
║
╠➥ *#bc*
╠➥ *#setprefix*
╠➥ *#getses*
╠➥ *#clearall*
╠➥ *#block*
╠➥ *#unblock*
╠➥ *#leave*
╠➥ *#clone*
║
╚═〘 NEKO BOT 〙`
}
exports.ownercmd = ownercmd()
function admincmd() {
    return `
╔══✪〘 ADMIN 〙✪══
║
╠➥ *#setname*
╠➥ *#setdesc*
╠➥ *#add*
╠➥ *#kick*
╠➥ *#demote*
╠➥ *#promote*
╠➥ *#opengc*
╠➥ *#closegc*
╠➥ *#group [buka/tutup]*
╠➥ *#simih [1/0]*
╠➥ *#welcome [1/0]*
║
╚═〘 NEKO BOT 〙`
exports.admincmd = admincmd()
function praycmd() {
    return `
╔══✪〘 PRAY 〙✪══
║
╠➥ *#kisahnabi*
╠➥ *#randomquran*
╠➥ *#bacaanshalat*
╠➥ *#niatshalat*
║
╚═〘 NEKO BOT 〙`
}
exports.praycmd = praycmd()
function kerangcmd() {
    return `
╔══✪〘 KERANG 〙✪══
║
╠➥ *#apakah [optional]*
╠➥ *#rate* [optional]*
╠➥ *#bisakah* [optional]*
╠➥ *#kapankah* [optional]*
║
╚═〘 NEKO BOT 〙`
}
exports.kerangcmd = kerangcmd()
function mediacmd() {
    return `
╔══✪〘 MEDIA 〙✪══
║
╠➥ *#fototiktok*
╠➥ *#tiktokstalk*
╠➥ *#pin*
╠➥ *#pinsearch*
╠➥ *#trendtwit*
╠➥ *#ssweb*
╠➥ *#quotes*
╠➥ *#cerpen*
╠➥ *#chord*
╠➥ *#lirik*
╠➥ *#map*
╠➥ *#kbbi [query]*
╠➥ *#wiki [query]*
╠➥ *#shopee [query]*
╠➥ *#google [query]*
╠➥ *#pinterest [query]*
╠➥ *#playstore [query]*
╠➥ *#googleimage [query]*
╠➥ *#brainlysearch [query]*
╠➥ *#youtubesearch [query]*
╠➥ *#translate [bahasa] [teks]*
╠➥ *#brainly [pertanyaan] [.jumlah]*
╠➥ *#lirik [optional]*
╠➥ *#chord [optional]*
╠➥ *#qrcode [optional]*
╠➥ *#maps [optional]*
╠➥ *#textmaker [teks1|teks2]*
╠➥ *#checkip [ipaddress]*
╠➥ *#ssweb [linkWeb]*
╠➥ *#*
║
╚═〘 NEKO BOT 〙`
exports.animecmd = animecmd()
function othercmd() {
    return `
╔══✪〘 OTHER 〙✪══
║
╠➥ *#bahasa*
╠➥ *#sticker*
╠➥ *#stickergif*
╠➥ *#sfire*
╠➥ *#slightning*
╠➥ *#ttp [teks]*
╠➥ *#stickertoimg*
╠➥ *#neko*
╠➥ *#pokemon*
╠➥ *#inu*
╠➥ *#infoGempa*
╠➥ *#quotes*
╠➥ *#ptl*
╠➥ *#dadu*
╠➥ *#koin*
╠➥ *#quoterandom*
║
╚═〘 ELAINA BOT 〙`
}
exports.othercmd = othercmd()
function downloadcmd() {
    return `
╔══✪〘 DOWNLOADER 〙✪══
║
╠➥ *#ytmp3 [linkYt]*
╠➥ *#ytmp4 [linkYt]*
╠➥ *#ig [linkIg]*
╠➥ *#fb [linkFb]*
╠➥ *#twitter [linkTwitter]*
╠➥ *#smule [linkSmule]*
╠➥ *#tiktok [linkTiktok]*
╠➥ *#starmaker [linkStarmaker]*
╠➥ *#xnxx [linkXnxx]*
╠➥ *#nhder [kodeNuclear]*
╠➥ *#joox [lagu]*
╠➥ *#play [lagu]*
╠➥ *#music [lagu]*
╠➥ *#getmusic [IdDownload]*
╠➥ *#video [video]*
╠➥ *#getvideo [IdDownload]*
║
╚═〘 ELAINA BOT 〙`
}
exports.downloadcmd = downloadcmd()
function groupcmd() {
    return `
╔══✪〘 GROUP 〙✪══
║
╠➥ *#snk*
╠➥ *#groupinfo*
╠➥ *#add 62858xxxxx*
╠➥ *#kick @tagmember*
╠➥ *#promote @tagmember*
╠➥ *#demote @tagadmin*
╠➥ *#tagall*
╠➥ *#adminList*
╠➥ *#ownerGroup*
╠➥ *#leave*
╠➥ *#delete [replyChatBot]*
╠➥ *#kickAll*
╠➥ *#group [open|close]*
╠➥ *#NSFW [enable|disable]*
╠➥ *#left [enable|disable]*
╠➥ *#welcome [enable|disable]*
╠➥ *#simi [enable|disable]*
║
╚═〘 ELAINA BOT 〙`
}
exports.groupcmd = groupcmd()
