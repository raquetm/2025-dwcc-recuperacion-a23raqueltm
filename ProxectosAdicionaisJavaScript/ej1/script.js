// Nesta páxina propóñense unha serie de funcións e proxectos novos para practicar JavaScript.

// Algunhas das propostas enlazan a repositorios que inclúen o código HTML e CSS. O primeiro que haberá que facer é analizar este código para entender como está construída a páxina web. Unha vez entendido, engadirase a funcionalidade JavaScript. Aínda que nos repositorios enlazados está a solución, debedes intentar chegar a ela de forma autónoma.

// Crea unha función denominada reverseString que reciba unha cadea como parámetro e devolva a cadea cos caracteres invertidos. Así, se recibe "hello", debe devolver "olleh". A funcionalidade debe estar implementada manualmente.

function reverseString(cadea) {
  return cadea.split('').reverse().join('');
}

console.log(reverseString('hello'));
