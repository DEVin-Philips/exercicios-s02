// Obtem a idade e formata para inteiro
var idade = parseInt(prompt('Informe sua idade'));

// Variável para armazenar o resultado
var classificacao = '';

if (isNaN(idade) || idade < 0) {
  // Verifica se é uma idade inválida
  classificacao = 'Idade inválida';
} else if (idade <= 15) {
  // Verifica se a idade é menor ou igual a 15
  classificacao = 'Jovem';
} else if (idade <= 64) {
  // Verifica se a idade é menor ou igual a 64
  classificacao = 'Adulto';
} else {
  // Se não for nenhum dos cenários anteriores só pode ser esse
  classificacao = 'Idoso';
}

// Exibe a mensagem
alert(classificacao);
