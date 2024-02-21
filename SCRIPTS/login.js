var alerta = window.alert("Hmm, danada");
var confirmacao = window.confirm("Voce concorda com os termos?");
var senha = window.prompt("Digite a senha..");
var acesso = true;

if (senha == "hack" && confirmacao == true) {
  window.alert("Seja bem-vindo");
} else {
  acesso = false;
}

while (acesso == false) {
  window.alert("Acesso NEGADO!!");
}
