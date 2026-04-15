$(document).ready(function () {

    $(".register-container").fadeIn(800, function () {
  
      $(".campo").eq(0).slideDown(300, function () {
        $(".campo").eq(1).slideDown(300, function () {
          $(".campo").eq(2).slideDown(300, function () {
            $(".campo").eq(3).slideDown(300, function () {
              $("#btnCadastrar").fadeIn(400);
            });
          });
        });
      });
  
    });
  
    $("#btnCadastrar").click(function () {
      let nome = $("#nome").val().trim();
      let email = $("#email").val().trim();
      let senha = $("#senha").val().trim();
      let confirmarSenha = $("#confirmarSenha").val().trim();
  
      $("#mensagem").hide();
  
      if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
        mostrarErro("Preencha todos os campos!");
        return;
      }
  
      if (!email.includes("@")) {
        mostrarErro("Digite um e-mail válido!");
        return;
      }
  
      if (senha.length < 6) {
        mostrarErro("A senha deve ter pelo menos 6 caracteres!");
        return;
      }
  
      if (senha !== confirmarSenha) {
        mostrarErro("As senhas não coincidem!");
        return;
      }
  
      $("#mensagem")
        .removeClass("erro")
        .addClass("sucesso")
        .text("Cadastro realizado com sucesso!")
        .fadeIn(500);
  
      $("#btnCadastrar")
        .text("Cadastrando...")
        .slideUp(200)
        .slideDown(200);
    });
  
    function mostrarErro(texto) {
      $("#mensagem")
        .removeClass("sucesso")
        .addClass("erro")
        .text(texto)
        .fadeIn(500);
  
      $(".register-container")
        .animate({ marginLeft: "-10px" }, 100)
        .animate({ marginLeft: "10px" }, 100)
        .animate({ marginLeft: "-10px" }, 100)
        .animate({ marginLeft: "10px" }, 100)
        .animate({ marginLeft: "0px" }, 100);
    }
  
  });