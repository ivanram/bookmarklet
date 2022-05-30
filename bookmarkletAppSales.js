javascript:void(0);
prevPage = document.getElementsByClassName("pagination")[0].firstElementChild.getElementsByTagName("A")[0].href;
nextPage = document.getElementsByClassName("pagination")[0].lastElementChild.getElementsByTagName("A")[0].href;
bla = document.getElementsByClassName('card-panel sale-list-item');
var el = Array.from(bla);
for (i = 0; i < el.length; i++) {
var it = el[i];
var name = it.getElementsByClassName('app-name')[0].innerHTML.trim();
var url =  it.getElementsByTagName('a')[0].getAttribute("href");
var image = it.getElementsByTagName('img')[0].getAttribute("src").replace("s56-rp-e7","s128-rp-e7");
var newPrice = it.getElementsByClassName('price-new')[0].innerHTML.replace('€', 'euros');
if (newPrice == "FREE"){newPrice = '<span style="color:red">gratis</span>';}
var oldPrice = it.getElementsByClassName('price-old')[0].innerHTML.replace('€', 'euros');

document.write('<html style="font-family:arial">');
document.write('<style>textarea{border-radius: 8px;padding: 8px;background-color: ivory;width:500px;}a{text-decoration:none;display:inline-block;color:#4567a5}a:hover{color: cadetblue;}h2{padding-top:12px;margin-bottom: 0px;}</style>');
document.write('<img src="'+image+'" style="float:left;padding:30px" />');
document.write('<a href="' +url+ '"><H2>'+name+'</H2></a>');
document.write('<p style="font-size:12">Precio original: <b>'+oldPrice+"</b> | Precio nuevo: <b>"+newPrice+"</b></p>");
    composedtext='<textarea onclick="this.select();document.execCommand(\'copy\');this.style.backgroundColor=\'aliceblue\'" id="inputo" rows="6">* **['+name+"]("+url+")** <del>"+oldPrice+"</del> "+newPrice+"\n\n</textarea>";
    document.write(composedtext);
document.write('<div style="clear:both">&nbsp;</div>');
    }
document.write('<a href="' + prevPage + '">&lt; Página anterior</a> | <a href="' + nextPage + '">Página siguiente &gt;</a>');

    document.write('<p style="font-size:12">Brought to you by Ivan Ramirez and coffee</p>');
    document.getElementById("inputo").select();
