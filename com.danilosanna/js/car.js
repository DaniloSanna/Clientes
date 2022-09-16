var imgSrc = [];
var imgTit = [];
var imgDes = [];
var pos = 0;
var trans = (window.innerWidth > 0) ? window.innerWidth : screen.width;

function imgAdd(a, b, c) {
    imgTit.push(a);
    imgDes.push(b);
    imgSrc.push(c);

}

imgAdd('PETVET', 'Hotsite para Veterinários', 'img/sec_proj_veterinario.webp');
imgAdd('Huumburg', 'Site para Restaurante', 'img/sec_proj_hamburguer.webp');
imgAdd('Smart Home Ipiranga', 'Hotsite Imobiliário', 'img/sec_proj_empreendimento.webp');
imgAdd('Summer Fest', 'Hotsite para Eventos', 'img/sec_proj_festival.webp');


for (let x = 0; x < imgSrc.length; x++) {

    document.getElementById("ul_mobile").innerHTML +=
        "<li class='carousel__slide'" + "id=car" + x + ">" +
        "<div class='proj_animation'>" +
        "    <div class='item'>" +
        "        <spam class='item_header'>" + imgTit[x] + "</spam>" +
        "        <spam class='item_descri'>" + imgDes[x] + "</spam>" +
        "        <img class='opaca carousel_img' width='342px' height='470px' alt=" + imgDes[x] + " src=" + imgSrc[x] + ">" +
        "    </div>" +
        "</div>" +
        "</li>";

    }

function bt_direita() {
    if (pos > -1*(imgSrc.length-3)) {
        let po = --pos * (trans/3);
        document.getElementById("caroussel").style = 'left:' + po + 'px;';
    }
}
function bt_esquerda() {
    if (pos < 0) {
        let po = ++pos * (trans/3);
        document.getElementById("caroussel").style = 'left:' + po + 'px;';
    }
}