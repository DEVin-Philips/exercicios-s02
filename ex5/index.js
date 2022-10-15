// Obtem o número e formata para inteiro
var numero = parseInt(prompt('Informe um número'));

if (isNaN(numero) || numero <= 0) {
  // Valida se é um número inválido
  alert('Número inválido');
} else {
  // Cria variáveis para armazenar os valores
  var pares = 0;
  var impares = 0;

  // Repete a execução por n vezes com base no número digitao
  for (let i = 0; i <= numero; i++) {
    // Valida se é par ou impar e atualiza os valores das variáveis
    i % 2 === 0 ? pares++ : impares++;
  }

  // Exibe resultado
  alert(`Existem ${pares} pares e ${impares} ímpares entre 0 e ${numero}`);
}
