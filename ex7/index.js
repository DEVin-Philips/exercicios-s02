// Obtem a data atual
var data = new Date();
// Obtem o ano da data atual
var ano = data.getFullYear();
//Obtem o mes da data atual. Em JS o mes inicia em 0 por isso o + 1
var mes = data.getMonth() + 1;
//Obtem o dia do mes - a função getDay obtem o dia da semana
var dia = data.getDate();

// Formata a data atual removendo os minutos.
// A funcão getTime retorna o tempo em milissegundos tendo como base 1/1/1970
var dataAtual = new Date(`${ano}-${mes}-${dia}`).getTime();

// Obtem os milissegundos das datas correspondentes ao outono
var dataInicioOutono = new Date(`${ano}-3-22`).getTime();
var dataFimOutono = new Date(`${ano}-6-21`).getTime();

// Obtem os milissegundos das datas correspondentes ao inverno
var dataInicioInverno = new Date(`${ano}-6-22`).getTime();
var dataFimInverno = new Date(`${ano}-9-21`).getTime();

// Obtem os milissegundos das datas correspondentes a primavera
var dataInicioPrimavera = new Date(`${ano}-9-22`).getTime();
var dataFimPrimavera = new Date(`${ano}-12-21`).getTime();

// Variável para armazenar o resultado
var resultado = '';

if (dataAtual >= dataInicioOutono && dataAtual <= dataFimOutono) {
  // Compara se a data atual está entre o período do outono
  resultado = 'Outono';
} else if (dataAtual >= dataInicioInverno && dataAtual <= dataFimInverno) {
  // Compara se a data atual está entre o período de inverno
  resultado = 'Inverno';
} else if (dataAtual >= dataInicioPrimavera && dataAtual <= dataFimPrimavera) {
  // Compara se a data atual está entre o período da primavera
  resultado = 'Primavera';
} else {
  // Se não corresponder a nenhum intervalo é verão
  resultado = 'Verão';
}

// Exibe a estação
alert(`A estação é: ${resultado}`);
