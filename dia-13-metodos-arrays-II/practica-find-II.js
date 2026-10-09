let libros = [
  { titulo: "Cien años de soledad", autor: "García Márquez", anio: 1967 },
  { titulo: "1984", autor: "George Orwell", anio: 1949 },
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry", anio: 1943 },
];

let libro = libros.find(function (x) {
  return x.titulo === "1984";
});

console.log(`Titulo: ${libro.titulo} autor: ${libro.autor}año: ${libro.anio} 
`);
