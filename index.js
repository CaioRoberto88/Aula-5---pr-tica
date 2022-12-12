/* Problema - 2 - Estrutura Condicional Alinhada

1- Elabore um algoritmo para calcular o salário líquido de uma pessoa.

2- Solicite ao usuário que digite seu nome e o valor de seu salário bruto.

3- Peça também, para o usuário digitar a quantidade de dependentes.

4- Calcule a renda familiar per capta;

5- Caso a renda para cada membro da família seja menor que R$ 500,00 a pessoa ficará isenta de imposto de renda, ou seja, não será calculado dentre as faixas salariais e seu valor será zero.

6 - Caso a renda para cada membro da família seja maior ou igual a R$ 500,00 o imposto de renda a ser descontado do salário bruto deve considerar as seguintes regras:

  --> Salário bruto (de 0,00 até 1.903,98) taxa de 5%

  --> Salário bruto (de 1.903,99 até 2.826,65) taxa de 7,5%

  --> Salário bruto (a partir de 2.826,66) taxa dê 15%

7- Ao final, mostre na tela o valor do salário líquido.

*/

let prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome");

let salarioBruto = parseFloat(prompt("Digite seu salário bruto"));

let dependentes = parseInt(prompt("Digite número de dependentes"));

let rendaPerCapita = salarioBruto / (dependentes + 1);


if (rendaPerCapita <= 500) {
  console.log(`${nome} o senhor tem renda per capta de ${rendaPerCapita}, por pessoa então o senhor ficará isento de pagar impostos, por tanto seu salario líquido será igual seu salário bruto que é de R$ ${salarioBruto}`);
} else if (rendaPerCapita >= 500) {
  if (salarioBruto > 0 && salarioBruto <= 1903.98) {

    let ir5 = salarioBruto * 5 / 100;

    console.log(`${nome} o senhor tem Nº${dependentes} depedentes e seu salário bruto e de R$ ${salarioBruto}, e terá uma taxa de 5%, pois sua renda per capta é de ${rendaPerCapita} por pessoa, sendo assim seu salário líquido menos os descontos ficará em R$ ${salarioBruto - ir5}`);

  } else if (salarioBruto <= 2826.65) {

    let ir75 = salarioBruto * 7.5 / 100;

    console.log(`${nome} o senhor tem Nº${dependentes} depedentes e seu salário bruto e de R$ ${salarioBruto}, e terá uma taxa de 7,5%, pois sua renda per capta é de ${rendaPerCapita}, sendo assim seu salário líquido menos os descontos ficará em R$ ${salarioBruto - ir75}`);

  } else {
    let ir15 = salarioBruto * 15 / 100;

    console.log(`${nome} o senhor tem Nº${dependentes} depedentes e seu salário bruto e de R$ ${salarioBruto}, e terá uma taxa de 15%, pois sua renda per capta é de ${rendaPerCapita}, sendo assim seu salário líquido menos os descontos ficará em R$ ${salarioBruto - ir15}`);

  }
}
