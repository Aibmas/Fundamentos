function jugarJuego(jugador1, jugador2) {
    let resultado = "";
    jugador1 = prompt("Escoge jugador1: R, T O P");
    jugador2 = prompt("Escoge jugador2: R, T O P");
  
    switch (jugador1) {
      case "T":
        switch (jugador2) {
          case "T":
            resultado = "Empate";
            break;
          case "R":
            resultado = "T-R Roca rompe tijeras gana el jugador 1";
            break;
          case "P":
            resultado = "T-P Papel cubre roca gana el jugador 2";
            break;
          default:
            resultado = "Jugador 2 ha elegido una opción no válida";
            break;
        }
        break;
  
      case "R":
        switch (jugador2) {
          case "T":
            resultado = "T-R Roca rompe tijeras gana el jugador 2";
            break;
          case "R":
            resultado = "Empate";
            break;
          case "P":
            resultado = "R-P Las tijeras cortan papel gana el jugador 1";
            break;
          default:
            resultado = "Jugador 2 ha elegido una opción no válida";
            break;
        }
        break;
  
      case "P":
        switch (jugador2) {
          case "T":
            resultado = "T-P Papel cubre roca gana el jugador 1";
            break;
          case "R":
            resultado = "R-P Las tijeras cortan papel gana el jugador 2";
            break;
          case "P":
            resultado = "Empate";
            break;
          default:
            resultado = "Jugador 2 ha elegido una opción no válida";
            break;
        }
        break;
  
      default:
        resultado = "Jugador 1 ha elegido una opción no válida";
        break;
    }
  
    console.log(resultado);
  }
  
  // Ejemplo de uso
  jugarJuego("T", "R");
  