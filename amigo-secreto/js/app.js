let amigos = [];

function adicionar(){
       let amigo = document.getElementById('nome-amigo');
       let lista = document.getElementById('lista-amigos');
       
       amigos.push(amigo.value);
       if(lista.textContent == ''){
              lista.textContent = amigo.value;
       }else{
              lista.textContent = lista.textContent + ', ' + amigo.value;
       }
       amigo.value = ''
}

function sortear(){
       embaralha(amigos);
       let sorteio = document.getElementById('lista-sorteio');
       
       for (let i = 0; i < amigos.length; i++) {
              if (i == amigos.length - 1) {
                     sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
              } else {
                     sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
              }
       }
       
}

function embaralha(lista) {
       
       for (let indice = lista.length; indice; indice--) {
              
              const indiceAleatorio = Math.floor(Math.random() * indice);
              
              // atribuição via destructuring
              [lista[indice - 1], lista[indiceAleatorio]] = 
              [lista[indiceAleatorio], lista[indice - 1]];
       }
}

function reiniciar(){
       amigo = [];
       document.getElementById('lista-amigos').innerHTML = '';
       document.getElementById('lista-sorteio').innerHTML = '';
       
       
}

/*
Criar uma funcionalidade no Projeto Amigo Secreto que permita ao usuário clicar em um amigo na lista e removê-lo. Atualizar a visualização da lista após a remoção.

Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. Imprima novaLista no console.

Remova o último elemento de novaLista. Imprima novaLista após a remoção.

Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.

Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste a função com novaLista e imprima o array resultante.

*/

function concat(){
    let  minhaLista = [1,2,3];
    let outraLista = [4,5,6];
    let novaLista = minhaLista + ', ' + outraLista
       console.log(novaLista);
}