let venta = [120, 80, 150, 90, 200, 60];
let total = 0;
let cantidad = 0;
let ventaMaxima = 0;
let ventaMinima = 9999;
let ventasMayores = 0;

for (let i = 0; i < venta.length; i++) {
  total += venta[i];
  cantidad++;
  if (venta[i] > ventaMaxima) {
    ventaMaxima = venta[i];
  }
  if (venta[i] < ventaMinima) {
    ventaMinima = venta[i];
  }
  if (venta[i] > 100) {
    ventasMayores++;
  }
}

let promedio = total / cantidad;
promedio = Math.round(promedio * 100) / 100;

console.log(`=== REPORTE DE VENTAS ===
\n Total: ${total}\n Cantidad: ${cantidad}\n Promedio: ${promedio}\n Venta máxima: ${ventaMaxima}\n Venta minima: ${ventaMinima}\n Venta mayores: ${ventasMayores}  `);
