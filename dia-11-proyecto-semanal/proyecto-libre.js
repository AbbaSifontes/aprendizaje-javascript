// Contexto: Una biblioteca necesita un sistema para gestionar sus libros.

let libros = [
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    disponible: true,
  },
  {
    titulo: "El señor de los anillos",
    autor: "J. R. R. Tolkien",
    anio: 1954,
    disponible: false,
  },
  { titulo: "1984 ", autor: "George Orwell", anio: 1949, disponible: false },
  {
    titulo: "Un mundo feliz",
    autor: "Aldous Huxley",
    anio: 1932,
    disponible: true,
  },
];

let biblioteca = {
  mostrarLibros: function () {
    for (let i = 0; i < libros.length; i++) {
      console.log(`Titulo: ${libros[i].titulo} 
        Autor: ${libros[i].autor}
        Anio: ${libros[i].anio}
        Disponible: ${libros[i].disponible} `);
    }
  },

  contarDisponibles: function () {
    let disponibles = 0;
    for (let i = 0; i < libros.length; i++) {
      if (libros[i].disponible === true) {
        disponibles++;
      }
    }
    return disponibles;
  },
  buscarPorAutor: function (autor) {
    for (let i = 0; i < libros.length; i++) {
      if (libros[i].autor === autor) {
        return `Libros de: ${libros[i].autor}
        Titulo: ${libros[i].titulo} - Anio: ${libros[i].anio}`;
      }
    }
    return null;
  },
};

biblioteca.mostrarLibros();
let enStock = biblioteca.contarDisponibles();

console.log(`Libros disponibles en Stock: ${enStock}`);

let autores = biblioteca.buscarPorAutor("Aldous Huxley");

console.log(autores);
