function autenticar(){
   const email = document.querySelector("#email").value;
   const senha = document.querySelector("#senha").value;


   if(email == "usuario@gmail.com" && senha=="123456"){
    location.href= "/index3.html";
   }else{
    alert("/!\\ AVISO\n Email ou senha incorretos!");
   }

}