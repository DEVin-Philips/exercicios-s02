var data = new Date();

// Obtem o dia da data
var dia = data.getDate();
// Obtem o mes da data. Em JS o mes inicia em 0 por isso o + 1
var mes = data.getMonth() + 1;

/* Valida se a data informada está dentro do periodo do outono
 * 22/03 a 21/06 - Outono;
 */
var resultado = '';
if ((dia >= 22 && mes === 3) || mes === 4 || mes === 5 || (dia <= 21 && mes === 6)) {
  resultado = 'Outono';
} else if ((dia >= 22 && mes === 6) || mes === 7 || mes === 8 || (dia <= 21 && mes === 9)) {
  /* Valida se a data informada está dentro do periodo do outono
   * 22/06 a 21/09 - Inverno;
   */
  resultado = 'Inverno';
} else if ((dia >= 22 && mes === 9) || mes === 10 || mes === 11 || (dia <= 21 && mes === 12)) {
  /* Valida se a data informada está dentro do periodo do outono
   * 22/09 a 21/12 - Primavera;
   */
  resultado = 'Primavera';
} else {
  resultado = 'Verão';
}

// Exibe a estação
alert(`A estação é: ${resultado}`);
