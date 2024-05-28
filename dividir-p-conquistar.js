//o conceito da estrategia dividir para conquistar é dividirmos nosso problema em problemas cada vez menores
let total = 0;

const soma = function(arr) {
  if ( arr.length === 0) {
    return 0
  } else {
    total += arr.shift()
    soma(arr)
  }
  return total
}

console.log(soma([2,4,6]));