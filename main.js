
const elemento = document.querySelector("#nome-usuario");
let nomeusuario = prompt("Qual é o seu nome?");


//se o campo ficar vazio fica repetindo
while(nomeusuario == ""){
    nomeusuario= prompt("Qual é o seu nome?");
}


//se o campo for nulo ou seja clicar no botão cancelar
if(nomeusuario == null){
    elemento.textContent = "Seja muito bem-vindo.";
}else {
    elemento.textContent = nomeusuario;
}