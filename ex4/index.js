// Cria as variáveis para utilizar posteriormente
var sair = false;
var soma = 0;

// Irá repetir a execução enquanto a variavel sair for false
while (!sair) {
  // Obtem o número e formata para inteiro
  var numero = parseInt(prompt('Informe um número'));

  // Valida se é um número válido para realizar a soma
  if (!isNaN(numero) && numero !== -1) {
    soma += numero;
  }

  // Se for informado o número -1 altera o valor da variavel sair para true e com isso a execução é finalizada
  if (numero === -1) {
    sair = true;
  }
}

// Exibe o resultado
alert(`A soma é: ${soma}`);
