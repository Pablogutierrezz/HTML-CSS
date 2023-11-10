function verificar(){
     var data= new Date()
     var ano =data.getFullYear()
     var fano =document.querySelector('input#txtano')
     var res =document.querySelector('div#res')
     if(fano.value.length == 0 || fano.value > ano ) {
          window.alert('[ERRO] verifique os dados e tente novamnete')
     }else{
          var fsex = document.getElementsByName('radsex')
          var idade = ano-Number(fano.value)
          var genero =''
          if(fsex[0].checked){
               genero ='homem' 
               if(idade >=0 && idade <10){  
                              
               }else if(idade < 21 ){
                    //jovem
               }else if( idade <50){
                    //adulto
               }else{
                    //idoso
                 }
               
          }
          else if (fsex[1].checked)
               genero = 'mulher'    
               if(idade >=0 && idade <10){
                    //criança
               }else if(idade < 21 ){
                    //jovem
               }else if( idade <50){
                    //adulto
               }else{
                    //idoso
                 }                    
          res.innerHTML= ` Detectamos ${genero} com ${idade} anos.`

     }
   
}