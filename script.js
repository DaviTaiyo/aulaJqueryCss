$(document).ready(function () {
    // Animação ao carregar a pagina
    $(".login-container").fadeIn(1200);

    //clique no botão
    $("#btnLogin").click(function () {
        let email = $("#email").val();
        let senha = $("#senha").val();

        //esconde mensagem antiga
        $("mensagem").hide();

        if (email === "" || senha == "") {
            $("mensagem")
            .removeClass("Sucesso")
            .addClass("erro")
            .text("Preencha todos os campos")
            .fadeIn(500);
        }
    })
})