// Contexto: Un perfil de usuario.

let usuario = {
  nombre: "ana",
  edad: 25,
  ciudad: "Caracas",
  profesión: "Ingeniera",
};

for (let propiedad in usuario) {
  console.log(`${propiedad}: ${usuario[propiedad]}`);
}
