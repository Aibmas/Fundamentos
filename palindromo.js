function esPalindromo(frase) {
    frase = frase.replace(/\s/g, "").toLowerCase();
    
    for (let i = 0; i < frase.length / 2; i++) {
      if (frase[i] !== frase[frase.length - 1 - i]) {
        return false;
      }
    }
    
    return true;
  }
  
  function obtenerLetras(frase) {
    frase = frase.replace(/\s/g, "");
    
    let primeraLetra = frase.charAt(0);
    let letraMitad = frase.charAt(Math.floor(frase.length / 2));
    
    return [primeraLetra, letraMitad];
  }
  
  let frase = prompt("Ingrese una frase:");
  if (esPalindromo(frase)) {
    console.log("La frase es un palíndromo.");
  } else {
    console.log("La frase no es un palíndromo.");
  }
  
  let [primeraLetra, letraMitad] = obtenerLetras(frase);
  console.log("La primera letra es:", primeraLetra);
  console.log("La letra en la mitad es:", letraMitad);
  