// Obtem os valores e realizar a formatacão no que é necessário
var numero1 = parseInt(prompt('Informe o primeiro número'));
var numero2 = parseInt(prompt('Informe o segundo número'));
var operacao = prompt('Informe a operação');

var resultado = '';

// Valida se os números são validos
if (!isNaN(numero1) && !isNaN(numero2)) {
  // Encontra a operação e realiza o calculo desejado
  switch (operacao) {
    case '+':
      resultado = `${numero1} + ${numero2} = ${numero1 + numero2}`;
      break;
    case '-':
      resultado = `${numero1} - ${numero2} = ${numero1 - numero2}`;
      break;
    case '*':
      resultado = `${numero1} * ${numero2} = ${numero1 * numero2}`;
      break;
    case '/':
      resultado = `${numero1} / ${numero2} = ${numero1 / numero2}`;
      break;
    default:
      // Caso a operação seja inválida executa esse trecho de código
      resultado = 'Operação inválida';
  }
} else {
  // Caso os números seja inválida executa esse trecho de código
  resultado = 'Números inválidos';
}

// Exibe o resultado
alert(resultado);
