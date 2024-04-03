function NombresPairs(Tabl) {
  return Tabl.filter(nombre => nombre % 2 === 0);
}

Tabl1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nombresPairs = NombresPairs(Tabl1);
console.log(nombresPairs);
