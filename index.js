/* 
Problema:

Elabore um algoritmo para calcular o salário líquido de 5 pessoas.

Solicite ao usuário que digite seu nome e o valor de seu salário bruto.

Peça também, para o usuário digitar a quantidade de dependentes.

Para cada um dos dependentes deve ser solicitado o ganho mensal.

Este valor deverá ser adicionado ao salário bruto.

Calcular a renda familiar per capta.

Caso a renda para cada membro da família seja menor do que R$ 500,00 a pessoa ficará isenta de imposto de renda, ou seja, não será calculado dentre as faixas salariais e seu valor será "zero".

Caso a renda para cada membro da família seja maior do que R$500,00 o imposto de renda a ser descontado do salário bruto deve considerar as seguintes regras:

1-Salário bruto (de 0,00 até 1.903,98): taxa de 5%

2-Salario bruto (de 1.903,99 até 2.826,65): taxa de 7,5%

3-Salário bruto (a partir de 2.826,66): taxa de 15%.

Armazene os salários líquidos de uma coleção indexada (array).

Depois, calcule a média de todos os salários líquidos.

Posteriormente, mostre a média dos salários líquidos e quantas pessoas estão abaixo desse valor médio.


Versão: 11 - Coleções (Arrays).

*/
const prompt = require ("prompt-sync")();

var pessoas = 5;
var arrSalarios = [];
var totalSoma = 0;
var media;
var contador = 0;

for (let i = 0; i < pessoas; i++) {
  
  let nome = prompt("digite seu nome");

let salarioBruto = parseFloat(prompt("digite seu salário bruto"));

let dependentes = parseInt(prompt("digite nº de dependentes"));

var ganhoMensal = 0;
var ganhoMensal2 = 0;

for (let index = 0; index < dependentes; index++) {

  ganhoMensal = parseFloat(prompt("digite o ganho mensal de cada um dos dependentes"));

  ganhoMensal2 = ganhoMensal2 + ganhoMensal;

}

let salarioBruto2 = ganhoMensal2 + salarioBruto;


var rendaPerCapta = parseInt(salarioBruto2 / (dependentes + 1));


if (rendaPerCapta >= 500) {

  console.log(` O senhor ${nome}, tem renda per capta de R$ ${rendaPerCapta}, por isso será taxado`);
    if (salarioBruto2 < 1903.98) {
       var ir5 = salarioBruto2 * 5 / 100;
        console.log("Salário líquido será de R$", salarioBruto2 - ir5, "taxado em 5%");
       var salarioLiquido = salarioBruto2 - ir5;
    }else if(salarioBruto2 > 1903.99 && salarioBruto2 < 2826.66) {
       var ir7 = salarioBruto2 * 7.5 / 100;
       console.log("Salário líquido será de R$", salarioBruto2 - ir7, "taxado em 7.5%");
       var salarioLiquido = salarioBruto2 - ir7;
    }else {
       var ir15 = salarioBruto2 * 15 / 100;
       console.log("Salário líquido será de R$", salarioBruto2 - ir15, "taxado em 15%");
       var salarioLiquido = salarioBruto2 - ir15;
    }
  
} else {

  console.log(`${nome}, tem renda per capta de R$ ${rendaPerCapta}, por isso está isento de imposto`);

}
  arrSalarios.push(salarioLiquido);
  totalSoma = totalSoma + salarioLiquido;
}

 media = totalSoma / pessoas;

console.log("soma de todos salários é de R$", totalSoma);

console.log("media salarial é de R$",  media);

for (let i = 0; i < 4; i++) {
  
 if ( arrSalarios[i] < media) {
   contador++;
 } else {
  
 }
  
}

console.log("Quantidade de pessoas com salário abaixo da média é ",contador);