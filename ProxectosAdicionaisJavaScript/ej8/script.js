// Crea unha función denominada dividirArray que reciba como parámetros un array e un número que indica o tamaño dos anacos en que se dividirá o array. A función devolverá un novo array que conteña como elementos novos arrays do tamaño máximo indicado no segundo parámetro.
// dividirArray([1, 2, 3, 4], 2) devolverá [[1, 2],[3, 4],]
// dividirArray([1, 2, 3, 4], 3) devolverá [[1, 2, 3], [4]]

function dividirArray(array, number) {
  const resultado = [];
  for (let index = 0; index < array.length; index += number) {
    resultado.push(array.slice(index, index + number));
  }
  return resultado;
}
console.log(dividirArray([1, 2, 3, 4], 2));
console.log(dividirArray([1, 2, 3, 4], 3));
