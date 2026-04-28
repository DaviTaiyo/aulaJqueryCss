$(document).ready(function () {

  // animação inicial da HOME
  $(".card").eq(0).fadeIn(500, function () {
    $(".card").eq(1).fadeIn(500, function () {
      $(".card").eq(2).fadeIn(500, function () {
        $(".perfil-usuario-home").fadeIn(600, function () {
          $(".atividade-recente").fadeIn(600);
        });
      });
    });
  });

  // clique no menu lateral
  $(".sidebar ul li").click(function () {
    $(".sidebar ul li").removeClass("ativo");
    $(this).addClass("ativo");

    let pagina = $(this).data("pagina");

    $(".conteudo-pagina").hide();
    $(".mensagem-item").hide();

    if (pagina === "home") {
      $("#homeSection").fadeIn(300);
    } else if (pagina === "perfil") {
      $("#perfilSection").fadeIn(300);
    } else if (pagina === "mensagens") {
      $("#mensagensSection").fadeIn(300, function () {
        $(".mensagem-item").each(function (index) {
          $(this).delay(index * 200).fadeIn(300);
        });
      });
    }
  });

  // efeito ao clicar nos cards
  $(".card").click(function () {
    $(this).fadeOut(150).fadeIn(150);
  });

  // destacar mensagem clicada
  $(".mensagem-item").click(function () {
    $(".mensagem-item").removeClass("ativa");
    $(this).addClass("ativa");
  });

});