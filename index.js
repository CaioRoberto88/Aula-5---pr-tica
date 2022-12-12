/* Problema - 1 - Semana 2  Javascript 

Elabore um algoritimo para calcular o salário líquido de uma pessoa.

Solicite ao usuário que digite seu nome e o valor de seu salário bruto.

O imposto de renda a ser descontado do salário bruto deve considerar as seguites regras:

1- Salário bruto de ( R$ 0,00 até R$ 1.903,98 ): taxa de 5%

2- Salário bruto de ( R$ 1.903,99 até  R$ 2.826,65 ) taxa de 7.5%

3- Salário bruto acima de (R$ 2.826,66 ): taxa de 15%

*/



let prompt = require("prompt-sync")();


let nome = prompt ("Digite seu nome");

let salarioBruto = parseFloat(prompt("Digite o seu salário bruto"));

if (salarioBruto > 0 && salarioBruto <= 1903.98) {
  let ir5 = (salarioBruto * 5) / 100;
  console.log(
    `Senhor ${nome} o seu saláio liquido é de R$ ${salarioBruto - ir5
    } seguindo a tabela da receita federal de taxar 5% de quem recebe até R$ 1.903,98`
  );
} else if (salarioBruto <= 2826.65) {
  let ir7 = (salarioBruto * 7.5) / 100;
  console.log(
    `Senhor ${nome} o seu salário líquido é de R$ ${salarioBruto - ir7
    } seguindo a tabela da receita federal de taxar 7.5% de quem recebe acima de R$ 1.903,99 e menos do que R$ 2.826,65`
  );
} else {
  let ir15 = (salarioBruto * 15) / 100;
  console.log(
    `Senhor ${nome} o seu salário líquido é de R$ ${salarioBruto - ir15
    } seguindo a tabela da receita federal de taxar 15% de quem recebe acima de R$ 2.826,65`
  );
}
