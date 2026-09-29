// Contexto: Un termómetro.

let termometro = {
  temperatura: 25,
  mostrarEstado: function () {
    return this.temperatura > 25 ? "Hace calor" : "Temperatura agradable";
  },
};

let resultado = termometro.mostrarEstado();

console.log(resultado);
