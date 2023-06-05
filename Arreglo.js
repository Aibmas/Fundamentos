function insertElementAt(arr, element, index) {
    const newArr = [...arr.slice(0, index), element, ...arr.slice(index)];
  
    return newArr;
  }
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newElement = prompt("Ingresa el numero que cambiara entre 1-9");
  let position = prompt("Posicion del numero");
  
  const newArr = insertElementAt(arr, newElement, position);
  
  console.log(`El arreglo resultante es: [${newArr}]`);
  
