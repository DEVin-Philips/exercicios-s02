// Obtem o número e formata para inteiro
var numero = parseInt(prompt('Informe um número'));

// Variável para armazenar o resultado
var texto = '';

if (isNaN(numero)) {
  // Valida se é um número inválido
  texto = 'Número inválido';
} else {
  // Se for um número válido cria uma estrutura de repetição que vai de 0 a 10
  for (let i = 0; i <= 10; i++) {
    // Concatena o texto formatado, verificando se é o ultimo para não adicionar a quabra de linha \n
    texto += `${numero} x ${i} = ${numero * i} ${i !== 10 ? '\n' : ''}`;
  }
}

// Exibe o resultado
alert(texto);
