let totalGeral = 0; // Inicializar totalGeral com 0
document.getElementById('valor-total').textContent = `R$ 0`
document.getElementById('lista-produtos').innerHTML = ' '
document.getElementById('quantidade')

function adicionar() {
    // Recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0].trim();
    let valorUnitario = parseFloat(produto.split('R$')[1].trim());
    let quantidade = parseInt(document.getElementById('quantidade').value);

    if(isNaN(quantidade) || quantidade <= 0){
       alert('Valor preenchido de forma errada');
       return limpar();
    }
    // Calcular o preço (subtotal)
    let preco = quantidade * valorUnitario;

    // Atualizar o carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
    </section>`;

    // Atualizar o valor total
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`; // Exibe o total com 2 casas decimais

    // Limpar campo de quantidade
    document.getElementById('quantidade').value = 0;
}

function limpar(){
       document.getElementById('valor-total').textContent = `R$ 0`
       document.getElementById('lista-produtos').innerHTML = ' '
       quantidade = parseInt(document.getElementById('quantidade').value = ' ')
}

function adicionarH1(){
       let novoH1 = document.createElement('h1');
       novoH1.textContent = '(Quantidade)';
       // Pegar o primeiro elemento com a classe 'campo-grupo'
    let campoGrupo = document.getElementsByClassName('campo-grupo')[0];

     // Adicionar o novo <h1> como filho do elemento 'campo-grupo'
     campoGrupo.appendChild(novoH1);
     
}

const duasSentencas = "Criar o que não existe ainda deve ser a pretensão de todo sujeito que está vivo; A tarefa mais importante de uma pessoa que vem ao mundo é criar algo"
const frasesSeparadas = duasSentencas.split(';');

console.log(frasesSeparadas);

// function adicionar() {
//     let produto = document.getElementById('produto').value;
//     let quantidade = document.getElementById('quantidade').value;


//     // Verificar se o produto selecionado é válido
//     if (!produto || produto.trim() === "") {
//         alert("Selecione um produto válido.");
//         return;
//     }


//     // Verificar se a quantidade inserida é válida
//     if (isNaN(quantidade) || quantidade <= 0) {
//         alert("Insira uma quantidade válida.");
//         return;
//     }


//     let nomeProduto = produto.split('-')[0];
//     let valorUnitario = parseFloat(produto.split('R$')[1]);
//     let preco = quantidade * valorUnitario;


//     let carrinho = document.getElementById('lista-produtos');
//     carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
//     <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
//   </section>`;


//     totalGeral = totalGeral + preco;
//     let campoTotal = document.getElementById('valor-total');
//     campoTotal.textContent = `R$ ${totalGeral}`;
//     document.getElementById('quantidade').value = 0;
// }




// function limpar() {
//     totalGeral = 0;
//     document.getElementById('lista-produtos').innerHTML = '';
//     document.getElementById('valor-total').textContent = 'R$0';
// }
// Copiar código
// Desafio 2: Captura de Valores do Formulário

// Código em html:

// <html>
// <body>
// <form id="meuForm">
//     <label for="campoNome">Nome:</label>
//     <input type="text" id="campoNome" name="nome">
    
//     <label for="campoIdade">Idade:</label>
//     <input type="text" id="campoIdade" name="idade">

//     <button type="button" onclick="capturarValores()">Capturar Valores</button>
  
//   <div id='mostraNome'><span>Seu nome e idade irão aparecer aqui.</span></div>
// </form>

// <script src="script.js"></script>
// </body>
// </html>
// Copiar código
// Código em Javascript:


// function capturarValores() {
//     const nome = document.getElementById('campoNome').value;
//     const idade = document.getElementById('campoIdade').value;

//  document.getElementById('mostraNome').textContent = `Nome: ${nome}, Idade: ${idade}`;
//     console.log(`Nome: ${nome}, Idade: ${idade}`);
// }
// Copiar código
// Desafio 3: Modificação de Código HTML

// Código em html:

// <html>
//     <body>
// <p id="meuParagrafo">Texto original</p>
// <button onclick="modificarConteudo()">Modificar Conteúdo</button>

// <script src="script.js"></script>
//   </body>
// </html>
// Copiar código
// Código em Javascript:


// function modificarConteudo() {
//     const paragrafo = document.getElementById('meuParagrafo');
//     paragrafo.textContent = 'Novo texto modificado dinamicamente!';
// }
// Copiar código
// Desafio 4: Soma de dois números



// const numero1 = 10;
// const numero2 = 20;

// const soma = numero1 + numero2;
// const mensagem = `A soma de ${numero1} e ${numero2} é ${soma}.`;

// console.log(mensagem);
// Copiar código
// Desafio 5: Separar duas sentenças com ponto e vírgula

// const duasSentencas = "Criar o que não existe ainda deve ser a pretensão de todo sujeito que está vivo; A tarefa mais importante de uma pessoa que vem ao mundo é criar algo"
// const frasesSeparadas = duasSentencas.split(';');

// console.log(frasesSeparadas);
// Copiar código
// Desafio 6: Separar número com split()

// const numerosSeparados = "10,20,30,40,50";
// const arrayNumeros = numerosSeparados.split(',');
// console.log(arrayNumeros);