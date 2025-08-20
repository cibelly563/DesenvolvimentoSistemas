let vendasSemana = [
  [120, 90, 150],    // Segunda
  [80, 60],          // Terça
  [200, 100, 50],    // Quarta
  [130, 170],        // Quinta
  [90, 30, 40],      // Sexta
  [300],             // Sábado
  [110, 90]          // Domingo
];

let nomesDias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

let totalVendas = vendasSemana.flat().reduce((acc, val) => acc + val, 0);

let totaisPorDia = vendasSemana.map(dia => dia.reduce((a, v) => a + v, 0));
let maiorFaturamento = Math.max(...totaisPorDia);
let indiceMaior = totaisPorDia.indexOf(maiorFaturamento);
let diaMaior = nomesDias[indiceMaior];

let mediaSemanal = totalVendas / vendasSemana.length;
let diasAcimaMedia = nomesDias.filter((dia, idx) => totaisPorDia[idx] > mediaSemanal);

console.log("a) Soma total das vendas da semana:", totalVendas);
console.log("b) Dia com maior faturamento:", diaMaior, `(${maiorFaturamento})`);
console.log("c) Dias com vendas acima da média semanal:", diasAcimaMedia);
