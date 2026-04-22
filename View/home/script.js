$(document).ready(function () {

    // Animação dos cards NÃO FAÇAM IGUAL
    $(".card").eq(0).fadeIn(500, function () {
      $(".card").eq(1).fadeIn(500, function () {
        $(".card").eq(2).fadeIn(500, function () {
          $(".perfil-usuario").fadeIn(600, function () {
            $(".atividade-recente").fadeIn(600);
          });
        });
      });
    });
  
    // Clique no menu lateral NÃO FAÇAM IGUAL
    $(".sidebar ul li").click(function () {
      $(".sidebar ul li").removeClass("ativo");
      $(this).addClass("ativo");
    });
  
    // Efeito ao clicar no card NÃO FAÇAM IGUAL
    $(".card").click(function () {
      $(this)
        .fadeOut(150)
        .fadeIn(150);
    });
  
  });