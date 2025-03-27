// Crea unha función denominada isPalidrome que reciba como parámetro un string e devolva true se é un palíndromo e false en caso contrario.
function isPalidrome(cadea) {
  return cadea == cadea.split('').reverse().join('');
}

console.log(isPalidrome('amor a roma'));
