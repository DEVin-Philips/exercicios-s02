// Obtem os números e formata eles
var numero = parseInt(prompt('Informe o número'));
var raiz = parseInt(prompt('Informe a raiz'));

// Cria as variáveis para utilizar depois e inicializa elas com o numero digitado
var soma = numero;
var texto = numero.toString();
// Percorre de 0 a 8 para realizar o cálculo
for (let i = 0; i < 9; i++) {
  soma += raiz;
  texto += `, ${soma}`;
}

// Exibe o resultado
alert(`A PA é: ${texto}`);
