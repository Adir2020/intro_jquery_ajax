function consultaCep(){
     $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);

            // usando o jquery para fazer a requisição
           $("#localidade").html(response.localidade);
           $("#ibge").html(response.ibge);
           $("#ddd").html(response.ddd);
           $("#uf").html(response.uf);
           $("#titulo_cep").html("CEP " + response.cep);
           $(".cep").show();
           $(".barra-progresso").hide();

            // outra forma de requisição
            //document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("ibge").innerHTML = response.ibge;
        }
    })
}

$(function(){
$(".cep").hide();
$(".barra-progresso").hide();
});