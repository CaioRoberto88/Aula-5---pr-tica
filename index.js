/* 

Problema:

Elabore um algoritmo para calcular o salário líquido de 5 pessoas.
Solicite ao usuário que digite seu nome e o valor de seu salário bruto.

Peça também, para o usuário digitar a quantidade de dependentes.

Calcule a renda familiar per capta.

Caso a renda para cada membro da família seja menor do que R$ 500,00 a pessoa ficará isenta de impostos de renda, ou seja, não será calculado dentre as faixas salariais e seu valor será zero "0".

Caso a renda para cada membro da família seja maior ou igual a R$ 500,00 o imposto de renda a ser descontado do salário bruto deve considerar as seguites regras:

1-Salário bruto (de 0,00 até 1903,98): 5%

2-Salário bruto (1.903,99 até 2.826,65): 7,5%

3-Salário bruto (a partir de 2.826,66): 15%


Ao final, mostre na tela o valor do salário líquido.


versão 09 - comandos de repetição

*/

let element = 5;

let prompt = require("prompt-sync")
();

for (let index = 1; index <= element; index++) {

  const element = [index];

  console.log("Pessoa ", element);

  let nome = prompt("Digite seu nome");

  let salarioBruto = parseFloat(prompt("Digite seu salário bruto"));
  
  let dependentes = parseInt(prompt("Numero de dependentes"));
  
  let rendaFamiliar = parseInt(salarioBruto / (dependentes + 1));
  
  if (rendaFamiliar >= 500) {
    if (salarioBruto > 0 && salarioBruto < 1903.98) {
      let salarioLiquido = (salarioBruto * 5) / 100;
  
      console.log(
        "seu salário liquido é de R$",
        salarioBruto - salarioLiquido,
        "Você",
        nome,
        "foi taxado em 5% sobre seu salário bruto de R$",
        salarioBruto
      );
    } else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
      let salarioLiquido = (salarioBruto * 7.5) / 100;
  
      console.log(
        "seu salário liquido é de R$",
        salarioBruto - salarioLiquido,
        "Você",
        nome,
        "foi taxado em 7.5% sobre seu salário bruto de R$",
        salarioBruto
      );
    } else {
      let salarioLiquido = (salarioBruto * 15) / 100;
  
      console.log(
        "seu salário liquido é de R$",
        salarioBruto - salarioLiquido,
        "Você",
        nome,
        "foi taxado em 15% sobre seu salário bruto de R$",
        salarioBruto
      );
    }
  } else {
    console.log(
      "Renda familia de R$",
      rendaFamiliar,
      "reais por pessoa.",
      "Por isso não será cobrado nenhuma taxa, motivo renda familiar abaixo de R$ 500 reais por pessoa"
    );
  }
}
