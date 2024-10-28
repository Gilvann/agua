function comprar() {
       // Produtos
       let tipoProduto = document.getElementById('tipo-ingresso');
       let pista = tipoProduto.value === 'pista';
       let superior = tipoProduto.value === 'superior';
       let inferior = tipoProduto.value === 'inferior';
   
       // Quantidade Selecionável
       let qtd = parseInt(document.getElementById('qtd').value);
   
       // Quantidades Mudadas
       let qntdPista = parseInt(document.getElementById('qtd-pista').textContent);
       let qntdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
       let qntdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
   
       let valor;
   
       if (pista) {
        if(qtd<=qntdPista){
            valor = qntdPista - qtd;
            document.getElementById('qtd-pista').textContent = valor;
        }else if(qtd>qntdPista){
            alert('Não tem ingresso suficiente para esta quantidade');
        }
    } else if (superior) {
        if(qtd<=qntdSuperior){
            valor = qntdSuperior - qtd;
            document.getElementById('qtd-superior').textContent = valor;
        }else if(qtd>qntdSuperior){
            alert('Não tem ingresso suficiente para esta quantidade');
        }
    } else if (inferior) {
        if(qtd<=qntdInferior){
            valor = qntdInferior - qtd;
            document.getElementById('qtd-inferior').textContent = valor;
        }else if(qtd>qntdInferior){
            alert('Não tem ingresso suficiente para esta quantidade');
        }
       }
   }
   
   /*
   function converterParaInteiro(valorString) {
    return parseInt(valorString);
}

// Exemplo de uso
let valorString = "42";
let valorInteiro = converterParaInteiro(valorString);
console.log(valorInteiro);  // Saída esperada: 42

   */