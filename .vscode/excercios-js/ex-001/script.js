function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    const hora=data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    
   if(hora >= 0 && hora < 12 ){
        img.src ='manha.jpg'

   } else if(hora >= 12 && hora < 18){
        img.src ='tarde.jpg'


   }else{
        img.src ='noite.jpg'
   }

}