
//algoritmo sem recursão:
function procurePelaChave(caixas) {
  for (const caixa in caixas) {
    if (caixas[caixa].dentroCaixa === 'chave') {
      return console.log('encontrei a chave!')
    } else {
      console.log('há outra caixa o.O')
    }
  }
}

// procurePelaChave([
//   {dentroCaixa: 'caixa'},
//   {dentroCaixa: 'caixa'},
//   {dentroCaixa: 'caixa'},
//   {dentroCaixa: 'caixa'},
//   {dentroCaixa: 'chave'},
//   {dentroCaixa: 'caixa'},
// ]);

function procurePelaChaveRecursivo(caixa){
  if (caixa.dentroCaixa !== 'chave') {
    console.log('há outra caixa dentro desta!')
    procurePelaChaveRecursivo(caixa.dentroCaixa)
  } else if (caixa.dentroCaixa === 'chave') {
    console.log('achei a chave!')
  }
}

//algoritmo com recursão:
const minhaCaixa = {
  dentroCaixa: {
    dentroCaixa: {
      dentroCaixa: {
        dentroCaixa: 'chave',
      },
    },
  },
}

procurePelaChaveRecursivo(minhaCaixa);