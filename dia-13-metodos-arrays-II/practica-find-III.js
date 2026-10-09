let estudiantes = [
  { nombre: "Ana", nota: 85, aprobado: true },
  { nombre: "Luis", nota: 45, aprobado: false },
  { nombre: "Pedro", nota: 92, aprobado: true },
  { nombre: "Maria", nota: 60, aprobado: false },
];

let aprov = estudiantes.find(function (x) {
  return x.aprobado === false;
});

console.log(`Nombre: ${aprov.nombre} nota: ${aprov.nota}`);
