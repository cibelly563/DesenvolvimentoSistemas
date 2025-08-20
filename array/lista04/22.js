let nomesAleatorios = [
  'klara', 'cibelly', 'rosana', 'ruan', 'ana', 'maria'
];

let nomesUnicos = Array.from(new Set(nomesAleatorios));

nomesUnicos.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log('Nomes únicos ordenados:');
nomesUnicos.forEach(nome => console.log(nome));