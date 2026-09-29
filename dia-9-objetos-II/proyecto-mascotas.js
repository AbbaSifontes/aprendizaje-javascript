// Contexto: Una veterinaria necesita registrar mascotas.

let mascota = {
  nombre: "firulais",
  especie: "perro",
  edad: 3,
  vacunado: true,
  mostrarFicha: function () {
    return `${this.nombre} - (${this.especie})- ${this.edad} años - Vacunado: ${this.vacunado}`;
  },
  cumplirAnios: function () {
    this.edad++;
    return `¡${this.nombre} cumplió ${this.edad} años!`;
  },
};

console.log(mascota.mostrarFicha());
console.log(mascota.cumplirAnios());
