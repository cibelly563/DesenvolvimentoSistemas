let alunos = ['felipe','gabriel','klara','livia'];

alunos= alunos.sort();
for(let i=0; i < alunos.length; i++ ) {
    console.log( alunos[1].toUppercase());
}
if(alunos.indexOf('joao henrique') != -1){
console.log('achei vc');
}else{
    console.log('nao achei vc');
}
console.log(alunos.includes('klara'))