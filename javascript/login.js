function login(){
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")


    if((email.value == "andreza@admin" && senha.value== "admin") ||(email.value == "bruna@admin" && senha.value== "admin") ){
        window.location.href = "index.html";
    }
    else{
        alert("Senha ou login inválidos!")
    }
}

let input = document.getElementById("senha");
    input.addEventListener("keyup", function(event) {
         if (event.keyCode === 13) {
            event.preventDefault();
             document.getElementById("teste").click();
        }
    });