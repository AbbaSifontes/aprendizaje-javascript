let celular = {
  marca: "Samsung",
  modelo: "Galaxy S24",
  precio: 899,
  encendido: false,
};

console.log(celular);

celular.encendido = true;
celular.color = "negro";

console.log(celular);

let estado = celular.encendido
  ? "El celular está encendido"
  : "El celular está apagado";

console.log(estado);
