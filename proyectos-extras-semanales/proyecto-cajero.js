// Contexto: Un banco necesita un simulador de cajero automático. El cajero tiene un saldo inicial y debe procesar una lista de operaciones.

let saldo = 1000;
let operaciones = [
  { tipo: "retiro", monto: 200 },
  { tipo: "deposito", monto: 500 },
  { tipo: "retiro", monto: 1500 },
  { tipo: "retiro", monto: 100 },
  { tipo: "deposito", monto: 300 },
];

let retirosExitosos = 0;
let retirosDenegados = 0;
let depositos = 0;

for (let i = 0; i < operaciones.length; i++) {
  switch (operaciones[i].tipo) {
    case "retiro":
      if (operaciones[i].monto > saldo) {
        console.log("Retiro denegado. Saldo insuficiente");
        retirosDenegados++;
      } else if (operaciones[i].monto <= saldo) {
        saldo = saldo - operaciones[i].monto;
        console.log(`Retiro exitoso. Nuevo saldo: ${saldo}`);
        retirosExitosos++;
      }
      break;
    case "deposito":
      saldo = saldo + operaciones[i].monto;
      console.log(`Depósito exitoso. Nuevo saldo: ${saldo}`);
      depositos++;
      break;
    default:
      console.log("Operación no válida");
  }
}

console.log(`=== RESUMEN DE OPERACIONES ===\n
Saldo final: ${saldo}\n
Retiros exitosos: ${retirosExitosos}\n
Retiros denegados: ${retirosDenegados}\n
Depósitos: ${depositos}`);
