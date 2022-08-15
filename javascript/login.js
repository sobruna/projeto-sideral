
function login(){
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")
    


    if((email.value == "andreza" && senha.value== "admin") ||(email.value == "bruna" && senha.value== "admin") ){
        window.location.href = "logado.html";
        
        
    }
    else{
        alert("Senha ou login inválidos!")
    }
      
    console.log("teste");

}

console.log("teste");
let email = document.getElementById("email")
let html =  document.getElementById("logado").innerHTML;
document.getElementById("logado").innerHTML = html;

let input = document.getElementById("senha");
    input.addEventListener("keyup", function(event) {
         if (event.keyCode === 13) {
            event.preventDefault();
             document.getElementById("teste").click();
        }
    });




        
