function carregar(){
    var msn = document.getElementById("msn");
    var foto = document.getElementById("imagen")
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    msn.innerHTML=`Agora são ${hora}:${min}`;
    if(hora >= 0 && hora < 12){
        // bom dia
        foto.src = 'midia/manha.png';
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <18){
        ///boa tarde
        foto.src ='midia/tarde.png'
        document.body.style.background = '#b9846f'
    }else {
        //Boa noiote
        foto.src='midia/noite.png'
        document.body.style.background = '#515154'
    }
}