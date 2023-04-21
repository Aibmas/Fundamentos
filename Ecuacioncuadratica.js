function quadraticFormula(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
      return null; // No existen soluciones reales
    } else if (discriminant === 0) {
      let x = -b / (2 * a);
      return [x, x]; // Solo hay una solución
    } else {
      let sqrtDiscriminant = Math.sqrt(discriminant);
      let x1 = (-b + sqrtDiscriminant) / (2 * a);
      let x2 = (-b - sqrtDiscriminant) / (2 * a);
      return [x1, x2]; // Hay dos soluciones
    }
  }
  
  //Ingresar los valores para el calculo:
  let a, b, c;
  a = prompt("ingresar numero");
  b = prompt("ingresar numero");
  c = prompt("ingresar numero");

  let solutions = quadraticFormula(a, b, c);
  if (solutions === null) {
    console.log("No hay soluciones reales.");
  } else if (solutions[0] === solutions[1]) {
    console.log("La única solución es:", solutions[0]);
  } else {
    console.log("Las soluciones son:", solutions[0], "y", solutions[1]);
  }
