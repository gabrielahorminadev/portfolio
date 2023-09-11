
    function logar(){
   
   let senha = document.getElementById('senha').value;
    let email = document.getElementById('email').value;
    

    if((email=="etec@email.com") && (senha=="etec")){
         alert("BEM VINDO!!");
         window.location.href="Perfil.html";
    }

    else{
          alert("ERRO AO LOGAR!!!");
     }
    }
    
