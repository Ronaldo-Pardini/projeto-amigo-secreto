//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
    // Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
    // Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
    // Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
    // Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
    // Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
    let nome = document.querySelector('input').value;
    if (nome =="") {
        alert('Por favor, insira um nome.');
    }
    else {
        amigos.push(nome)
        nome = document.querySelector('input');
        nome.value = '';
        atualizaLista();
    }
    return
}

function atualizaLista() {
    // Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.
    // Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.
    // Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
    // Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    

    for (let i = 0; i <= amigos.length; i++) {
        // Cria um novo item de lista
        let novoItem = document.createElement("li");
        novoItem.textContent = amigos[i]; // Define o texto do novo item

        // Adiciona o novo item à lista
        lista.appendChild(novoItem);
    }
}