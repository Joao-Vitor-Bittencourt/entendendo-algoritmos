const buscaMenor = function(arr) {
  let menor = arr[0];

  for (let i of arr) {
    if (i < menor) {
      menor = i
    }
  }
  return menor;
}

const ordenacaoPorSelecao = function(arr) {
  arrayOrdenado = [];
  for (i of arr) {
    menor = buscaMenor(arr);
    arrayOrdenado.push(menor);
    arr = arr.filter((numero) => numero !== menor)
  }
  return arrayOrdenado;
}

const myArray = [5,13,3,1,7,9,11,12,27,2];
console.log(ordenacaoPorSelecao(myArray));