const pilhaCaixas = [
  {dentroCaixa: 'caixa'},
  {dentroCaixa: 'caixa'},
  {dentroCaixa: 'caixa'},
  {dentroCaixa: 'caixa'},
  {dentroCaixa: 'chave'},
  {dentroCaixa: 'caixa'},
]

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

// procurePelaChave(pilhaCaixas)


//algoritmo com recursão:
console.log(procurePelaChaveRecursivo({}));