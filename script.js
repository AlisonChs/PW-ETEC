function preencherCard(listarAlunos){
// selecionei a div com o nome box
var box = document.querySelector('.box')

// selecionei a div container 
var div = document.querySelector('.container')


for (let index = 0; index < listarAlunos.length; index++) {
    var aluno = listarAlunos[index];

    // criando uma div 
    var novaDiv = document.createElement('div')
    //copiando o conteudo html

    novaDiv.innerHTML = box.innerHTML

    //associando a classe box a novaDiv
    novaDiv.classList.add('box')
    
    // cheguei na imagem 
    novaDiv.children[0].src = './aluno.jpg'

    var p1 = novaDiv.children[1].children[0];
    var p2 = novaDiv.children[1].children[0];

    p1.textContent = aluno.nome
    p2.textContent = aluno.media

    // Inserindo a novaDiv na tela
    div.appendChild(novaDiv)

    
    }
}

