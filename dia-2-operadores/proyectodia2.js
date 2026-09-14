//  PROYECTO: CALCULADORA DE IMC
// Contexto: Una clínica necesita una calculadora de Índice de Masa Corporal (IMC) para sus pacientes.

const peso = 70;
const altura = 1.75;
let imc = peso / (altura * altura);
let sobrepeso = imc > 25;
imc = Math.round(imc * 100) / 100;

console.log(
  `peso: ${peso} kg , Altura: ${altura} m , IMC: ${imc}, Sobrepeso ${sobrepeso}`,
);
