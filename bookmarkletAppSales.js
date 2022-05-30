javascript:void(0);

bla = document.getElementsByClassName('card-panel sale-list-item');
var el = Array.from(bla);

for (i = 0; i < el.length; i++) {

var it = el[i];

var name = it.getElementsByClassName('app-name')[0].innerHTML.trim();
var url =  it.getElementsByTagName('a')[0].getAttribute("href");
var image = it.getElementsByTagName('img')[0].getAttribute("src").replace("s56-rp-e7","s128-rp-e7");

var newPrice = it.getElementsByClassName('price-new')[0].innerHTML.replace('€', 'euros');
if (newPrice == "FREE"){newPrice = "gratis";}
var oldPrice = it.getElementsByClassName('price-old')[0].innerHTML.replace('€', 'euros');

document.write('<html style="font-family:arial">');
document.write('<img src="'+image+'" style="float:left;padding:30px" />');
document.write('<a href="' +url+ '"><H2 style="padding-top:30px" >'+name+'</H2></a>');
document.write('<p style="font-size:12">Precio original: <b>'+oldPrice+"</b> | Precio nuevo: <b>"+newPrice+"</b></p>");
    composedtext='<textarea onclick="this.select()" id="inputo" rows="5" style="width:500" >* **['+name+"]("+url+")** <del>"+oldPrice+"</del> "+newPrice+"</textarea>";
    document.write(composedtext);
document.write('<div style="clear:both">&nbsp;</div>');
    }

    document.write('<p style="font-size:12">Brought to you by Ivan Ramirez and coffee</p>');
    document.getElementById("inputo").select();
