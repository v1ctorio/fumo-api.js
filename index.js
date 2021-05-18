const fumos = [
    'https://media.discordapp.net/attachments/844262973043114044/844264145356324954/20210506_101930.jpg?width=639&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264149500690467/ae.jpg?width=438&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264162271690782/asjgd1.jpg?width=569&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264167703969833/awesome.jpg',
    'https://media.discordapp.net/attachments/844262973043114044/844264174490091541/buy_fumo.png?width=360&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264181824880651/chicles.png',
    'https://media.discordapp.net/attachments/844262973043114044/844264196815847434/cirno_.png?width=320&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264205145997417/cirno_systems.png',
    'https://media.discordapp.net/attachments/844262973043114044/844264214263496744/cirnu.png',
    'https://media.discordapp.net/attachments/844262973043114044/844264242927894558/depression.jpg',
    'https://media.discordapp.net/attachments/844262973043114044/844264251183202339/fascinating.jpg',
    'https://media.discordapp.net/attachments/844262973043114044/844264261069176853/image1.png',
    'https://media.discordapp.net/attachments/844262973043114044/844264261043617882/demoncore.png?width=760&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264262230999080/FB_IMG_1619370796382.png?width=490&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264265527459950/image3.jpg?width=569&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264267343593522/image4.png',
    'https://media.discordapp.net/attachments/844262973043114044/844264266478387200/fumorphs.png?width=291&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264269712719892/image2.png?width=372&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264273651826708/image8.png',
    'https://media.discordapp.net/attachments/844262973043114044/844264274574311454/donations.png?width=318&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264274939084820/image0.png?width=305&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264277232582726/image9.png',
    'https://media.discordapp.net/attachments/844262973043114044/844264279938039858/DWTnAhJVwAAccCZ.jpg?width=427&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264294967279666/koishi.png?width=320&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264296917630986/fascinating.jpg',
    'https://media.discordapp.net/attachments/844262973043114044/844264303888039956/image6.png?width=759&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264309067874317/FB_IMG_1619370796382.png?width=490&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264328633778226/tumblr_413017e9ee495f1d36c5a38c1fc599fb_c8d724eb_540.jpg?width=320&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264331385765910/tumblr_inline_oxonozDKaU1tk7m13_540.jpg?width=320&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264344081530950/tumblr_inline_pjlbdhLtVs1tk7m13_540.jpg',
    'https://media.discordapp.net/attachments/844262973043114044/844264345499598878/tumblr_otk4ctDHDf1wvw3f7o1_540.jpg',
    'https://media.discordapp.net/attachments/844262973043114044/844264347881832509/tumblr_ouao1wfPnv1wvw3f7o1_540.jpg',
    'https://media.discordapp.net/attachments/844262973043114044/844264348179759104/sdj.png?width=668&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264360708538368/tumblr_ov1oxiBCcd1wvw3f7o1_540.jpg?width=320&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264361244753940/tumblr_ouyfjoKHpV1wvw3f7o1_540.jpg?width=320&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264389297307648/tumblr_owvhyxEsGm1wvw3f7o1_540.jpg?width=320&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264389912952873/tumblr_oxdmeiuC0t1wvw3f7o1_540.jpg?width=320&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264392199766027/tumblr_oxooqm5sGX1wvw3f7o1_540.jpg?width=427&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264405868216330/image0.png?width=305&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264432716873728/image3_1.jpg?width=569&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264438025682964/tumblr_ozdv8oB0FK1wvw3f7o1_540.jpg?width=320&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264440719474698/tumblr_oztw32B6xW1wvw3f7o1_540.jpg?width=320&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264442341621760/tumblr_ozydr0JJ6T1wvw3f7o1_540.jpg',
    'https://media.discordapp.net/attachments/844262973043114044/844264444448210964/tumblr_p00bkkj4VQ1wvw3f7o1_540.jpg?width=320&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264446020943932/tumblr_p0ptn0TNGp1wvw3f7o1_500.jpg',
    'https://media.discordapp.net/attachments/844262973043114044/844264454697910292/tumblr_p3hkboENsq1wvw3f7o1_540.jpg',
    'https://media.discordapp.net/attachments/844262973043114044/844264466664914984/image7.png?width=454&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264480682934322/jesus.jpg?width=291&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264526534672394/tumblr_pdjfqtZBNp1wvw3f7o1_540.jpg?width=320&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264529063575582/unknown.png',
    'https://media.discordapp.net/attachments/844262973043114044/844264529839259668/wefhjj.jpg?width=321&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264529973215302/reimu_sandwich.jpg',
    'https://media.discordapp.net/attachments/844262973043114044/844264532976599081/welesrico_-_copia.jpg?width=421&height=427',
    'https://media.discordapp.net/attachments/844262973043114044/844264536080646164/yuyuko_delete_-_copia.png',
    'https://media.discordapp.net/attachments/844262973043114044/844264945595056148/tumblr_p7fssmdhzJ1wvw3f7o1_540.jpg?width=320&height=427'
]


function randomfumo() {
    var numeronadom = Math.floor(Math.random() * fumos.length)
    return fumos[numeronadom]
}

function fumo(numero) {
    return fumos[numero]
}


module.exports = {
    fumo,
    randomfumo
}