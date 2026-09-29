// Contexto: Un cajero automático básico.

let cuenta = {
  titular: "ana",
  saldo: 1000,
  mostrarSaldo: function () {
    return `${this.titular} tiene: $${this.saldo}`;
  },
};

let saldo = cuenta.mostrarSaldo();

console.log(saldo);
