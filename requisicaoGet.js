function buscarDados(){
    // Realizando uma requisição assincrona paea o arquivo Controller 
    fetch('http://localhost/pw_cards/Controller.php')
    // Convertendo a resposta da requisição em JSON
    .then(function(response){
        return response.json()
    })
    // Realizando ações sobre a respota convertida 
    .then(function(response){
        preencherCard(response)
        console.log(response)
    })
}

buscarDados();
