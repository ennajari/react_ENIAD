function NombresPairs(tableau) {
    return tableau.filter(nombre => nombre % 2 === 0);
  }
  
  tableauInitial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  nombresPairs = NombresPairs(tableauInitial);
  console.log(nombresPairs);
  