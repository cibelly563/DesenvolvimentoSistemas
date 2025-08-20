function comprimirSequencia(array) {
  if (array.length === 0) return [];

  let resultado = [];
  let contador = 1;
  let valorAtual = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] === valorAtual) {
      contador++;
    } else {
      resultado.push({ valor: valorAtual, repeticoes: contador });
      valorAtual = array[i];
      contador = 1;
    }
  }

  // Adiciona o último grupo
  resultado.push({ valor: valorAtual, repeticoes: contador });

  return resultado;
}

// Exemplo de uso
let dadosTemperatura = [22, 22, 22, 23, 23, 21, 21, 21, 21];
let comprimido = comprimirSequencia(dadosTemperatura);

console.log(comprimido);