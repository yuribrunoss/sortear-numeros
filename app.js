function sortear(){
    
   let  quantidade  = parseInt(document.getElementById('qtd').value);
   let  doNumero    = parseInt(document.getElementById('de').value);
   let  ateNumero   = parseInt(document.getElementById('ate').value);

   let sorteados = [];
   let numero;

   if (doNumero >= ateNumero) {
      alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
      return;
    }

    if (quantidade > (ateNumero - doNumero + 1)) {
      alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
      return;
    }

   for (let i = 0; i < quantidade; i++){
      
      numero = obterNumeroAleatorio(doNumero, ateNumero);
      
      while (sorteados.includes(numero)) {

         numero = obterNumeroAleatorio(doNumero, ateNumero);

      }
      
      sorteados.push(numero);
   }

   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

   alterarStatusBotaoReiniciar();

}

function obterNumeroAleatorio(min, max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoReiniciar() {
   
   let botaoReiniciar = document.getElementById('btn-reiniciar');
   
   if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {

      botaoReiniciar.classList.remove('container__botao-desabilitado');
      botaoReiniciar.classList.add('container__botao');
      
   } else {

      botaoReiniciar.classList.remove('container__botao');
      botaoReiniciar.classList.add('container__botao-desabilitado');

   }
      
   
}

function reiniciar() {

   document.getElementById('qtd').value = '';   
   document.getElementById('de').value = '';   
   document.getElementById('ate').value = '';   
   
   document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

   alterarStatusBotaoReiniciar();

}