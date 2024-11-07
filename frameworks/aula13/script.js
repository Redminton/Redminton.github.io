function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let formularioano = document.getElementById('txtano');
    let resultado = document.querySelector('div#resultado');
    if (formularioano.value.length == 0 || Number(formularioano.value) >= ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let formulariosexo = document.getElementsByName('radiosexo');
        let idade = ano - Number(formularioano.value);
        let genero = '';

        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (formulariosexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnPlwsVEj0iNNeJlUBcjWa386jQ4tnbRSOw&s');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'https://ds-images.bolavip.com/news/image/740/416/?src=https://images.somosfanaticos.fans/webp/br/full/SFBR_20241105_SFBR_434005_imago1053404455-scaled-e1730828497977.webp');
            } else if (idade > 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/10/bruno-mars-em-sao-paulo-1.jpg?w=420&h=240&crop=1&quality=85');
            } else {
                //idoso
                img.setAttribute('src', 'https://www.infomoney.com.br/wp-content/uploads/2024/10/2024-10-17T131325Z_1_LYNXMPEK9G0GT_RTROPTP_4_USA-ELECTION-TRUMP.jpg?fit=1280%2C853&quality=50&strip=all');
            }
        } else if (formulariosexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'https://media.istockphoto.com/id/1450677469/pt/foto/shop-glasses-and-eyes-of-black-child-with-vision-healthcare-frame-check-or-choice-in-retail.jpg?s=612x612&w=0&k=20&c=0S4YAkngdF9tzxIUDjfFxUPRcPw5UDPt690TVH_TWlg=');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'https://st4.depositphotos.com/15207794/38230/i/450/depositphotos_382301454-stock-photo-beautyful-teen-girl-street-old.jpg');
            } else if (idade > 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPD1m2VWCtS_KrcOIhK_zjy8X7kOZ_ZhyF9A&s');
            } else {
                //idoso
                img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sNZlQaulgzAh5F7MiaKX8WGNF-n78XQ-zg&s');
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        resultado.appendChild(img);
        img.setAttribute('width', '400px');
        console.log('teste');
    }
}