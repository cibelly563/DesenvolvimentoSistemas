let alunos = [
  { nome: 'klara', notas: [8, 7, 9, 10], faltas: 2 },
  { nome: 'cibelly', notas: [6, 7, 7, 8], faltas: 1 },
  { nome: 'rosana', notas: [7, 7, 7, 7], faltas: 5 },
];

let aprovados = alunos
  .map(aluno => ({
    ...aluno,
    media: aluno.notas.reduce((sum, nota) => sum + nota, 0) / aluno.notas.length
  }))
  .filter(aluno => aluno.media >= 7 && aluno.faltas <= 5)
  .sort((a, b) => b.media - a.media);

console.log('Alunos aprovados (ordenados por média decrescente):');
aprovados.forEach(aluno => {
  console.log(`${aluno.nome} — Média: ${aluno.media.toFixed(2)}, Faltas: ${aluno.faltas}`);
});
