let estudiante = {
  nombre: "Ana",
  nota: 85,
  mostrarInfo: function () {
    return `${this.nombre} tiene una nota de ${this.nota}`;
  },
};

let resultadoss = estudiante.mostrarInfo();

console.log(resultadoss);
