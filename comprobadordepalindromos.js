function convertToRoman(numero) {
    return numero = {
      1000: 'M',
      900: 'CM',
      500: 'D',
      400: 'CD',
      100: 'C',
      90: 'XC',
      50: 'L',
      40: 'XL',
      10: 'X',
      9: 'IX',
      5: 'V',
      4: 'IV',
      1: 'I'
    };
  
    let resultado = '';
  
    for (let valor in conversiones) {
      while (numero >= valor) {
        resultado += conversiones[valor];
        numero -= valor;
      }
    }
  
    return resultado;
  }
  console.log(convertToRoman());
