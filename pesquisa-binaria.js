//Para realizar uma pesquisa binária precisamos de nossos dados ordenados.

const arrNúmeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

//Como parâmetros entramos com nosso array mais o elemento que desejamos encontrar
function pesquisaBinária(arr, alvo) {
  let inicioArr = 0, finalArr = arr.length - 1;

  while (inicioArr <= finalArr) {
    let meioArr = Math.floor((inicioArr + finalArr) / 2);

    if(arr[meioArr] === alvo) {
      return true
      //Aqui identificamos se o alvo é maior ou menor que o meio do array.
    } else if (arr[meioArr] < alvo) {
      inicioArr = meioArr + 1;
    } else {
      finalArr = meioArr - 1;
    }
  }
  return false;
}

if(pesquisaBinária(arrNúmeros, 60)) {
  console.log('Encontrado!')
} else {
  console.log('Não Encontrado')
}