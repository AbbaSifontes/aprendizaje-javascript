// Contexto: Un sistema de facturación.

let factura = {
  numero: "F-001",
  cliente: "Ana",
  total: 250,
  pagada: false,
};
console.log(factura);

let estado = factura.pagada ? "pago" : "pendiente";

console.log(estado);
