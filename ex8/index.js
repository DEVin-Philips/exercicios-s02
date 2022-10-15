// número primo é aquele número onde ele é divisível
// apenas por 1 e por ele mesmo. Ex: 2, 3, 5, 7

var quantidade = 0;

// Inicia em 2 pois 0 e 1 não são primos e percorre até 1000
for (let n = 2; n <= 1000; n++) {
  var primo = true;
  // percorre de 2 até o número anterior ao atual com base no for de cima
  for (let i = 2; i < n; i++) {
    // Divide o número por todos os demais números e
    // verifica se o resto for 0 atualizando a variável
    // para não ser um número primo
    if (n % i === 0) {
      primo = false;
    }
  }

  // Verifica se a variável primo é verdadeira e se for atualiza os contadores
  if (primo) {
    quantidade++;
    console.log(n);
  }
}

// Exibe o resultado
console.log(`Existem: ${quantidade} números primos entre 0 e 1000`);
