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

  $("#btnCadastrar").click(async function () {
    let nome = $("#nome").val().trim();
    let email = $("#email").val().trim();
    let senha = $("#senha").val().trim();
    let genero = $("#generoSelect").val().trim();

    $("#mensagem").hide();

    if (nome === "" || email === "" || senha === "" || genero === "") {
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

    try {
      $("#btnCadastrar").text("Cadastrando...")

      const resposta = await fetch("http://localhost:3000/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          genero: genero,
          senha: senha
        })
      });

      if (!resposta.ok) {
        mostrarErro("Erro ao cadastrar usuário");
        $("#btnCadastrar").text("Cadastrar");
        return;
      }

      $("#mensagem")
        .removeClass("erro")
        .addClass("sucesso")
        .text("Cadastro realizado com sucesso!")
        .fadeIn(500);

      setTimeout(function () {
        window.location.href = "../Registrar/registrar.html"
      }, 1000);

    }
    catch (erro) {
      mostrarErro("Erro ao conectar com a API!");
      $("#btnCadastrar").text("Cadastrar");
    }

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