
(function(){
"use strict";
var root=document.getElementById("app");if(!root)return;
var lang=document.body.getAttribute("data-lang")||"ru";
if(!["ru","en","it"].includes(lang))lang="ru";
var locale={ru:"ru-RU",en:"en-GB",it:"it-IT"}[lang];
var links={ru:"./index.html",en:"./lang-en.html",it:"./lang-it.html"};
var photo={
safina:"https://safina.top/photos/safina-3.jpg",
safinaPortrait:"https://bstars.eu/media/djcatalog2/images/item/9/alessandro-safina.1.jpg",
turner:"https://rockthenight.eu/wp/wp-content/uploads/2023/11/ahat-joe-lynn-turner-7798.jpg",
paciotti:"https://www.vice.com/wp-content/uploads/sites/2/2017/07/1499675776591-FedericoPaciotti1003_phPaoloDeFrancesco-scaled.jpeg"
};
var tr={
ru:{
navArtists:"Артисты",navArchive:"Архив концертов",navGallery:"Галерея",navAbout:"Об агентстве",navContacts:"Контакты",
heroKicker:"Избранный артист",heroDesc:"Итальянский тенор. Мировые сцены, выдающийся голос и концерты в сопровождении симфонического оркестра.",
genre:"Опера · Кроссовер",archive:"Архив гастролей",discover:"Смотреть проекты",aboutArtist:"Об артисте",
stripe:"BEST SOUND ORIGINAL CONCERT PROJECTS",stripeEnd:"ИСКУССТВО ЖИВОГО ЗВУКА",
artistsTitle:"Артисты BEST SOUND",artistsInfo:"Музыканты, представленные в проектах агентства",archiveTitle:"Концертные проекты",archiveInfo:"Подтверждённые события прошлых лет",
galleryTitle:"Моменты на сцене",galleryInfo:"Артисты и концертные выступления",feature:"КОНЦЕРТНОЕ АГЕНТСТВО",featureTitle:"Наши концерты — произведение искусства.",
featureDesc:"Более 20 лет опыта. Концерты с мировыми звёздами, широкая география и тысячи зрителей — именно так BEST SOUND описывает свою работу.",
source:"Официальный сайт агентства",statYears:"лет опыта",statEvents:"успешных событий",statAudience:"довольных зрителей",
contactEyebrow:"СВЯЗАТЬСЯ С НАМИ",contactTitle:"Создадим следующий концерт вместе",contactText:"Для организации выступления, сотрудничества и запросов артистов свяжитесь с командой BEST SOUND.",
email:"Электронная почта",messengers:"WhatsApp / Telegram",rights:"Все права защищены",privacy:"Политика обработки данных",
modalArchive:"Архив выступлений",modalRequest:"Запросить артиста",modalDates:"Даты и города",close:"Закрыть",
searchPlaceholder:"Поиск артиста или города",searchEmpty:"Совпадений не найдено",seeDetails:"Подробнее",go:"Перейти к разделу",
artistDesc:["Итальянский тенор с симфоническим оркестром","Рок-вокалист, известный по Rainbow и Deep Purple","Итальянский тенор и виртуозный гитарист"],
cityCount:"городов",concert:"концерт",year:"год",search:"Поиск",menu:"Меню"
},
en:{
navArtists:"Artists",navArchive:"Concert archive",navGallery:"Gallery",navAbout:"About",navContacts:"Contacts",
heroKicker:"Featured artist",heroDesc:"Italian tenor. International stages, an extraordinary voice and symphonic orchestra performances.",
genre:"Opera · Crossover",archive:"Tour archive",discover:"Explore projects",aboutArtist:"About the artist",
stripe:"BEST SOUND ORIGINAL CONCERT PROJECTS",stripeEnd:"THE ART OF LIVE MUSIC",
artistsTitle:"BEST SOUND artists",artistsInfo:"Performers featured in the agency's concert projects",archiveTitle:"Concert projects",archiveInfo:"Published events from previous years",
galleryTitle:"On-stage moments",galleryInfo:"Artists and live performances",feature:"CONCERT AGENCY",featureTitle:"Our concerts are works of art.",
featureDesc:"Over 20 years of experience. Concerts with international stars, a wide touring geography and thousands of spectators — as described by BEST SOUND.",
source:"Agency website",statYears:"years of experience",statEvents:"successful events",statAudience:"satisfied spectators",
contactEyebrow:"GET IN TOUCH",contactTitle:"Let's create the next show",contactText:"Contact BEST SOUND for artist booking, concert production and partnerships.",
email:"Email",messengers:"WhatsApp / Telegram",rights:"All rights reserved",privacy:"Privacy policy",
modalArchive:"Performance archive",modalRequest:"Request an artist",modalDates:"Dates and cities",close:"Close",
searchPlaceholder:"Search artists or cities",searchEmpty:"No matching results",seeDetails:"View details",go:"Go to section",
artistDesc:["Italian tenor with symphony orchestra","Rock vocalist known for Rainbow and Deep Purple","Italian tenor and virtuoso guitarist"],
cityCount:"cities",concert:"concert",year:"year",search:"Search",menu:"Menu"
},
it:{
navArtists:"Artisti",navArchive:"Archivio concerti",navGallery:"Galleria",navAbout:"Agenzia",navContacts:"Contatti",
heroKicker:"Artista in evidenza",heroDesc:"Tenore italiano. Palcoscenici internazionali, una voce straordinaria e concerti con orchestra sinfonica.",
genre:"Opera · Crossover",archive:"Archivio tournée",discover:"Esplora i progetti",aboutArtist:"Scopri l'artista",
stripe:"BEST SOUND ORIGINAL CONCERT PROJECTS",stripeEnd:"L'ARTE DELLA MUSICA DAL VIVO",
artistsTitle:"Artisti BEST SOUND",artistsInfo:"Musicisti dei progetti concertistici dell'agenzia",archiveTitle:"Progetti concertistici",archiveInfo:"Eventi pubblicati degli anni passati",
galleryTitle:"Momenti sul palco",galleryInfo:"Artisti ed esibizioni dal vivo",feature:"AGENZIA DI CONCERTI",featureTitle:"I nostri concerti sono opere d'arte.",
featureDesc:"Oltre 20 anni di esperienza. Concerti con star internazionali, tournée in numerosi Paesi e migliaia di spettatori: così BEST SOUND presenta la propria attività.",
source:"Sito ufficiale dell'agenzia",statYears:"anni di esperienza",statEvents:"eventi di successo",statAudience:"spettatori soddisfatti",
contactEyebrow:"CONTATTACI",contactTitle:"Creiamo insieme il prossimo concerto",contactText:"Contatta BEST SOUND per artist booking, produzione concerti e collaborazioni.",
email:"Email",messengers:"WhatsApp / Telegram",rights:"Tutti i diritti riservati",privacy:"Informativa privacy",
modalArchive:"Archivio esibizioni",modalRequest:"Richiedi un artista",modalDates:"Date e città",close:"Chiudi",
searchPlaceholder:"Cerca artisti o città",searchEmpty:"Nessun risultato",seeDetails:"Dettagli",go:"Vai alla sezione",
artistDesc:["Tenore italiano con orchestra sinfonica","Cantante rock noto per Rainbow e Deep Purple","Tenore italiano e chitarrista virtuoso"],
cityCount:"città",concert:"concerto",year:"anno",search:"Cerca",menu:"Menu"
}
};
var t=tr[lang];
var cityTr={
"Tashkent":["Ташкент","Tashkent","Tashkent"],"Bishkek":["Бишкек","Bishkek","Bishkek"],"Minsk":["Минск","Minsk","Minsk"],"Kaliningrad":["Калининград","Kaliningrad","Kaliningrad"],"Saint Petersburg":["Санкт-Петербург","Saint Petersburg","San Pietroburgo"],"Moscow":["Москва","Moscow","Mosca"],"Chelyabinsk":["Челябинск","Chelyabinsk","Čeljabinsk"],"Ufa":["Уфа","Ufa","Ufa"],"Ekaterinburg":["Екатеринбург","Ekaterinburg","Ekaterinburg"],"Samara":["Самара","Samara","Samara"],"Novosibirsk":["Новосибирск","Novosibirsk","Novosibirsk"],"Omsk":["Омск","Omsk","Omsk"],"Krasnodar":["Краснодар","Krasnodar","Krasnodar"],"Essentuki":["Ессентуки","Essentuki","Essentuki"],"Sochi":["Сочи","Sochi","Soči"],"Volgograd":["Волгоград","Volgograd","Volgograd"],"Kostroma":["Кострома","Kostroma","Kostroma"],"Pskov":["Псков","Pskov","Pskov"],"Velikiy Novgorod":["Великий Новгород","Velikiy Novgorod","Velikij Novgorod"],"Cherepovets":["Череповец","Cherepovets","Cherepovets"],"Ivanovo":["Иваново","Ivanovo","Ivanovo"],"Vladimir":["Владимир","Vladimir","Vladimir"],"Kazan":["Казань","Kazan","Kazan"],"Perm":["Пермь","Perm","Perm"],"Izhevsk":["Ижевск","Izhevsk","Izhevsk"],"Tyumen":["Тюмень","Tyumen","Tjumen"],"Krasnoyarsk":["Красноярск","Krasnoyarsk","Krasnojarsk"],"Nizhny Novgorod":["Нижний Новгород","Nizhny Novgorod","Nižnij Novgorod"],"Gelendzhik":["Геленджик","Gelendzhik","Gelendžik"],"Yerevan":["Ереван","Yerevan","Erevan"],"Saratov":["Саратов","Saratov","Saratov"],"Astana":["Астана","Astana","Astana"],"Almaty":["Алматы","Almaty","Almaty"],"Baku":["Баку","Baku","Baku"],"Tbilisi":["Тбилиси","Tbilisi","Tbilisi"],"Istanbul":["Стамбул","Istanbul","Istanbul"],"Ankara":["Анкара","Ankara","Ankara"],"Athens":["Афины","Athens","Atene"],"Vienna":["Вена","Vienna","Vienna"]
};
var lid={ru:0,en:1,it:2}[lang];function city(name){return cityTr[name]?cityTr[name][lid]:name}
function spots(str){return str.trim().split("|").map(function(part){var a=part.split(":");return {date:a[0],city:a[1]}})}
var artists=[
{id:"safina",name:"Alessandro Safina",img:photo.safinaPortrait,genre:0,description:t.artistDesc[0]},
{id:"turner",name:"Joe Lynn Turner",img:photo.turner,genre:1,description:t.artistDesc[1]},
{id:"paciotti",name:"Federico Paciotti",img:photo.paciotti,genre:2,description:t.artistDesc[2]}
];
var tours=[
{id:"safina26",artist:"safina",name:"Alessandro Safina",year:2026,region:"2026 · EUROPE & ASIA",dates:spots("2026-02-21:Tashkent|2026-02-24:Bishkek|2026-02-26:Minsk|2026-02-28:Kaliningrad|2026-03-02:Saint Petersburg|2026-03-04:Moscow|2026-03-08:Chelyabinsk|2026-03-10:Ufa|2026-03-12:Ekaterinburg|2026-03-14:Samara|2026-03-16:Novosibirsk|2026-03-18:Omsk")},
{id:"safina25",artist:"safina",name:"Alessandro Safina",year:2025,region:"AUTUMN TOUR",dates:spots("2025-09-23:Krasnodar|2025-09-25:Essentuki|2025-09-29:Sochi|2025-10-02:Volgograd|2025-11-24:Kostroma|2025-11-26:Pskov|2025-11-28:Velikiy Novgorod|2025-11-30:Cherepovets|2025-12-02:Ivanovo|2025-12-04:Vladimir")},
{id:"safina25spring",artist:"safina",name:"Alessandro Safina",year:2025,region:"SPRING TOUR",dates:spots("2025-02-27:Minsk|2025-03-01:Kaliningrad|2025-03-03:Moscow|2025-03-05:Saint Petersburg|2025-03-07:Samara|2025-03-09:Ufa|2025-03-11:Ekaterinburg|2025-03-13:Tyumen|2025-03-15:Novosibirsk|2025-03-17:Krasnoyarsk|2025-03-20:Nizhny Novgorod|2025-03-23:Kazan")},
{id:"turner24",artist:"turner",name:"Joe Lynn Turner",year:2024,region:"ROCK TOUR",dates:spots("2024-10-24:Moscow|2024-10-26:Ekaterinburg")},
{id:"paciotti24",artist:"paciotti",name:"Federico Paciotti",year:2024,region:"CROSSOVER",dates:spots("2024-10-26:Kaliningrad")},
{id:"safina24",artist:"safina",name:"Alessandro Safina",year:2024,region:"TOUR",dates:spots("2024-03-03:Kaliningrad|2024-03-05:Saint Petersburg|2024-03-07:Moscow|2024-03-09:Ufa|2024-03-11:Chelyabinsk|2024-03-13:Ekaterinburg|2024-03-17:Tyumen|2024-03-19:Novosibirsk|2024-03-21:Volgograd|2024-07-09:Krasnodar|2024-07-11:Sochi|2024-07-15:Essentuki|2024-07-18:Gelendzhik")},
{id:"turner23",artist:"turner",name:"Joe Lynn Turner",year:2023,region:"ROCK TOUR",dates:spots("2023-10-03:Moscow|2023-10-05:Nizhny Novgorod|2023-10-07:Perm|2023-10-09:Izhevsk|2023-10-11:Ekaterinburg|2023-10-19:Krasnodar")},
{id:"safina23",artist:"safina",name:"Alessandro Safina",year:2023,region:"INTERNATIONAL TOUR",dates:spots("2023-11-16:Kazan|2023-11-18:Samara|2023-11-20:Saratov|2023-11-22:Nizhny Novgorod|2023-11-24:Tashkent|2023-11-27:Astana|2023-11-29:Almaty|2023-12-01:Baku|2023-12-03:Tbilisi|2023-12-05:Istanbul|2023-12-07:Ankara|2023-12-09:Athens|2023-12-11:Vienna")}
];
var iconSearch='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>';
var iconMenu='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
var iconInfo='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v2"/></svg>';
var iconPlay='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg>';
function tagLabel(i){return i===0?t.genre:i===1?"ROCK · LIVE":"OPERA · ROCK"}
function formatDate(iso){return new Intl.DateTimeFormat(locale,{day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(new Date(iso+"T12:00:00Z"))}
function artistCard(a){return '<button class="artist-card" type="button" data-artist="'+a.id+'" aria-label="'+t.seeDetails+': '+a.name+'"><img src="'+a.img+'" alt="'+a.name+'" loading="lazy" decoding="async"><span class="round-plus" aria-hidden="true">+</span><span class="card-content"><span class="card-overline">'+tagLabel(a.genre)+'</span><span class="card-title">'+a.name+'</span><span class="card-desc">'+a.description+'</span></span></button>'}
function tourCard(a){return '<button class="tour-card" type="button" data-tour="'+a.id+'" aria-label="'+t.seeDetails+': '+a.name+' '+a.year+'"><span class="tour-year">'+a.year+'</span><span class="tour-artist">'+a.region+'</span><span class="tour-name">'+a.name+'</span><span class="tour-city">'+a.dates.length+' '+t.cityCount+'</span><span class="tour-arrow" aria-hidden="true">↗</span></button>'}
function sectionHead(title,subtitle,scrollId){return '<div class="section-head"><div><h2 class="section-title">'+title+'</h2><p class="section-intro">'+subtitle+'</p></div><div class="row-arrows"><button type="button" data-scroll="'+scrollId+'" data-dir="-1" aria-label="Previous">‹</button><button type="button" data-scroll="'+scrollId+'" data-dir="1" aria-label="Next">›</button></div></div>'}
function safeMail(subject){return 'mailto:BESTJU@YANDEX.RU?subject='+encodeURIComponent(subject)}
root.addEventListener("error",function(ev){if(ev.target&&ev.target.tagName==="IMG"){ev.target.style.visibility="hidden"}},true);
root.innerHTML =
'<a class="skip" href="#main">'+t.go+'</a>'+
'<header class="nav" id="siteNav"><div class="container nav-inner">'+
'<a class="brand" href="'+links[lang]+'" aria-label="BEST SOUND"><span class="brand-mark"></span><span class="brand-copy"><small>CONCERT AGENCY</small>BEST SOUND</span></a>'+
'<nav class="nav-links" id="navLinks" aria-label="'+t.menu+'"><a href="#artists">'+t.navArtists+'</a><a href="#concerts">'+t.navArchive+'</a><a href="#gallery">'+t.navGallery+'</a><a href="#about">'+t.navAbout+'</a><a href="#contacts">'+t.navContacts+'</a></nav>'+
'<div class="nav-actions"><button class="icon-btn" type="button" id="searchToggle" aria-label="'+t.search+'" aria-expanded="false">'+iconSearch+'</button>'+
'<div class="lang" aria-label="Language"><a href="'+links.ru+'" class="'+(lang==="ru"?"current":"")+'" lang="ru">RU</a><a href="'+links.en+'" class="'+(lang==="en"?"current":"")+'" lang="en">EN</a><a href="'+links.it+'" class="'+(lang==="it"?"current":"")+'" lang="it">IT</a></div>'+
'<button class="menu-button" type="button" id="menuToggle" aria-label="'+t.menu+'" aria-expanded="false">'+iconMenu+'</button></div>'+
'<div class="search-panel" id="searchPanel"><input id="siteSearch" type="search" autocomplete="off" placeholder="'+t.searchPlaceholder+'" aria-label="'+t.search+'"><div class="search-list" id="searchResults"></div></div>'+
'</div></header>'+
'<section class="hero" id="home"><div class="hero-bg"><img src="'+photo.safina+'" alt="Alessandro Safina performing with an orchestra" fetchpriority="high"></div>'+
'<div class="container hero-content"><div class="hero-copy"><div class="hero-eyebrow">'+t.heroKicker+'</div><h1><span>ALESSANDRO</span><span>SAFINA</span></h1>'+
'<div class="hero-hint"><span>2026</span><i></i><span>'+t.genre+'</span><i></i><span>'+t.archive+'</span></div>'+
'<p class="hero-description">'+t.heroDesc+'</p><div class="hero-actions">'+
'<button type="button" class="btn btn-light" data-tour="safina26">'+iconPlay+t.discover+'</button><button type="button" class="btn btn-dark" data-artist="safina">'+iconInfo+t.aboutArtist+'</button>'+
'</div></div></div><div class="hero-index"><span>01 / 03</span></div></section>'+
'<main class="main container" id="main"><div class="feature-stripe"><span class="red-line"></span><span>'+t.stripe+'</span><span class="muted">/ '+t.stripeEnd+'</span></div>'+
'<section class="section" id="artists">'+sectionHead(t.artistsTitle,t.artistsInfo,"artistScroller")+'<div class="scroller" id="artistScroller">'+artists.map(artistCard).join("")+'</div></section>'+
'<section class="section" id="concerts">'+sectionHead(t.archiveTitle,t.archiveInfo,"tourScroller")+'<div class="scroller" id="tourScroller">'+tours.map(tourCard).join("")+'</div></section>'+
'<section class="section" id="gallery">'+sectionHead(t.galleryTitle,t.galleryInfo,"galleryScroller")+
'<div class="scroller" id="galleryScroller">'+[artists[0],artists[1],artists[2]].map(artistCard).join("")+'</div></section>'+
'<section class="section" id="about"><div class="editorial"><div class="editorial-image"><img loading="lazy" decoding="async" src="'+photo.safina+'" alt="Alessandro Safina with a symphony orchestra"></div><div class="editorial-copy"><div class="eyebrow">'+t.feature+'</div><h2>'+t.featureTitle+'</h2><p>'+t.featureDesc+'</p><a class="text-link" href="https://sound-agency.ru/" target="_blank" rel="noopener noreferrer">'+t.source+' ↗</a></div></div>'+
'<div class="metrics"><div class="metric"><strong>20+</strong><span>'+t.statYears+'</span></div><div class="metric"><strong>100+</strong><span>'+t.statEvents+'</span></div><div class="metric"><strong>1000+</strong><span>'+t.statAudience+'</span></div></div></section></main>'+
'<section class="contacts" id="contacts"><div class="container contacts-inner"><div><div class="eyebrow">'+t.contactEyebrow+'</div><h2>'+t.contactTitle+'</h2><p>'+t.contactText+'</p><a class="btn btn-red" href="'+safeMail("BEST SOUND — Request")+'">'+t.modalRequest+' ↗</a></div><div class="contact-links">'+
'<a class="contact-tile" href="mailto:BESTJU@YANDEX.RU"><small>'+t.email+'</small><strong>BESTJU@YANDEX.RU ↗</strong></a>'+
'<a class="contact-tile" href="https://wa.me/79269115740" target="_blank" rel="noopener noreferrer"><small>'+t.messengers+'</small><strong>+7 (926) 911-57-40 ↗</strong></a>'+
'</div></div></section>'+
'<footer class="footer"><div class="container"><a class="brand" href="'+links[lang]+'"><span class="brand-mark"></span><span class="brand-copy"><small>CONCERT AGENCY</small>BEST SOUND</span></a><div class="footer-meta"><span>© '+new Date().getFullYear()+' BEST SOUND · '+t.rights+'</span><a href="./privacy.html">'+t.privacy+'</a><a href="https://sound-agency.ru/" target="_blank" rel="noopener noreferrer">'+t.source+' ↗</a></div></div></footer>'+
'<dialog class="dialog" id="detailsDialog" aria-label="'+t.seeDetails+'"><div class="modal-banner"><img id="modalImage" alt=""><button class="modal-close" id="modalClose" type="button" aria-label="'+t.close+'">×</button></div><div class="modal-content"><div class="eyebrow" id="modalMeta"></div><h2 class="modal-title" id="modalTitle"></h2><p class="modal-desc" id="modalDesc"></p><div id="modalDates"></div><div class="modal-actions"><a class="btn btn-red" id="modalMail" href="'+safeMail("BEST SOUND — Artist booking")+'">'+t.modalRequest+'</a><button class="btn btn-dark" id="modalDone" type="button">'+t.close+'</button></div></div></dialog>';
var nav=document.getElementById("siteNav"), menu=document.getElementById("menuToggle"),searchToggle=document.getElementById("searchToggle"), searchPanel=document.getElementById("searchPanel"), search=document.getElementById("siteSearch"),dialog=document.getElementById("detailsDialog");
function updateNav(){nav.classList.toggle("scrolled",window.scrollY>30)}
window.addEventListener("scroll",updateNav,{passive:true});updateNav();
menu.addEventListener("click",function(){var on=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(on))});
document.querySelectorAll("#navLinks a").forEach(function(a){a.addEventListener("click",function(){nav.classList.remove("open");menu.setAttribute("aria-expanded","false")})});
searchToggle.addEventListener("click",function(){var on=searchPanel.classList.toggle("open");searchToggle.setAttribute("aria-expanded",String(on));if(on)search.focus()});
function closeDialog(){dialog.close()}
document.getElementById("modalClose").addEventListener("click",closeDialog);document.getElementById("modalDone").addEventListener("click",closeDialog);
dialog.addEventListener("click",function(e){if(e.target===dialog)closeDialog()});
function openDetail(kind,id){
var obj,art;var meta=document.getElementById("modalMeta"),title=document.getElementById("modalTitle"),desc=document.getElementById("modalDesc"),dates=document.getElementById("modalDates"),image=document.getElementById("modalImage"),mail=document.getElementById("modalMail");
if(kind==="tour"){
obj=tours.find(function(x){return x.id===id});if(!obj)return;
art=artists.find(function(x){return x.id===obj.artist});
meta.textContent=t.modalArchive+" / "+obj.year+" / "+obj.region;
title.textContent=obj.name;
desc.textContent=obj.dates.length+" "+t.cityCount;
dates.innerHTML='<div class="section-label">'+t.modalDates+'</div><ul class="modal-list">'+obj.dates.map(function(x){return "<li>"+formatDate(x.date)+" · "+city(x.city)+"</li>"}).join("")+"</ul>";
}else{
art=artists.find(function(x){return x.id===id});if(!art)return;
meta.textContent=tagLabel(art.genre);title.textContent=art.name;desc.textContent=art.description;
dates.innerHTML='<div class="section-label">'+t.modalArchive+'</div><ul class="modal-list">'+tours.filter(function(x){return x.artist===id}).map(function(x){return "<li>"+x.year+" · "+x.region+" · "+x.dates.length+" "+t.cityCount+"</li>"}).join("")+"</ul>";
}
image.src=art.img;image.alt=art.name;mail.href=safeMail("BEST SOUND — "+art.name);dialog.showModal();
}
document.addEventListener("click",function(e){var tbtn=e.target.closest("[data-tour]"),abtn=e.target.closest("[data-artist]"),sbtn=e.target.closest("[data-scroll]");if(tbtn)openDetail("tour",tbtn.dataset.tour);else if(abtn)openDetail("artist",abtn.dataset.artist);else if(sbtn){var row=document.getElementById(sbtn.dataset.scroll);if(row)row.scrollBy({left:Math.round(row.clientWidth*.8)*Number(sbtn.dataset.dir),behavior:"smooth"})}});
function norm(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}
function searchRender(){var q=norm(search.value.trim()),el=document.getElementById("searchResults");if(!q){el.innerHTML="";return}
var aa=artists.filter(function(x){return norm(x.name+" "+x.description).includes(q)});
var tt=tours.filter(function(x){return norm(x.name+" "+x.year+" "+x.region+" "+x.dates.map(function(d){return d.city+" "+city(d.city)}).join(" ")).includes(q)}).slice(0,7);
el.innerHTML=aa.map(function(x){return '<button type="button" data-artist="'+x.id+'">'+x.name+'<small>'+x.description+'</small></button>'}).join("")+
tt.map(function(x){return '<button type="button" data-tour="'+x.id+'">'+x.name+" · "+x.year+'<small>'+x.dates.length+" "+t.cityCount+"</small></button>"}).join("")+(!aa.length&&!tt.length?'<p style="color:#bbb;padding:10px">'+t.searchEmpty+"</p>":"");
}
search.addEventListener("input",searchRender);
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&searchPanel.classList.contains("open")){searchPanel.classList.remove("open");searchToggle.setAttribute("aria-expanded","false")}});
document.title="BEST SOUND — "+(lang==="ru"?"Концертное агентство":lang==="it"?"Agenzia di concerti":"Concert Agency");
})();
