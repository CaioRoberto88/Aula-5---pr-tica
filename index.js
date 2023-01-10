/*
Problema:

1-Elabore um algoritmo para calcular o salário líquido de 5 pessoas.

2-Solicite ao usuário que digite seu nome e o valor do seu salário bruto.

3-Peça também, para o usuário digitar a quantidade de dependentes.

4-Para cada um dos dependentes deve ser solicitado o ganho mensal, este valor deverá
ser adicionado ao salário bruto.

5-Calcule a renda familiar per capta.

6-Caso a renda para cada família seja menor que R$500,00 a pessoa ficará isenta de imposto de renda, ou seja, não será calculado dentre as faixas salariais e seu valor será 0 "Zero".


7-Caso a renda para cada membro da família seja maior ou igual a R$500,00 o imposto de renda a ser descontado do salário bruto deve considerar as seguites regras:

a-Salário bruto (de R$0,00 até R$1903,98) taxa de 5%

b-Salário bruto (de R$1903,99 até R$2826,65) taxa de 7,5%

c-Salário bruto (a partir de R$2826,66) taxa de 15%


8-Ao final, mostre na tela o valor do salário líquido.

9-Armazene os salários líquidos em uma coleção indexada(Array).

10-Depois, calcule a média de todos os salários líquidos.

11-Posteriormente, mostre a média dos salários líquidos e quantas pessoas estão abaixo desse valor médio.


12- refatore seu código. Para isso, crie 2 funções a saber:

a-Função para calcular o IR: esta função deve receber como parâmentros o salário bruto e a renda per capta, e, retornar ao final o valor do IR;

b-Função para calcular a quantidade de salários líquidos menores que a média: esta função deve receber como parâmetros o array de salários líquidos e a média dos salários líquidos, e, retornar a quantidade de salários líquidos menores que a média;

*/

const prompt = require("prompt-sync")();

var pessoas = 5;

var ganhoMensal = 0;

var ganhoTotal = 0;

var rendaPerCapta = 0;

var salarioBruto = 0;

var arrSalarios = [];

var salarioTotal = 0;

var media;

var soma = 0;

for (let i = 0; i < pessoas; i++) {
  var nome = prompt("Digite seu nome");

  var salarioBruto = parseFloat(prompt("digite o seu salário bruto"));

  var dependentes = parseInt(prompt("digite nº de dependentes"));


for (let i = 0; i < dependentes; i++) {
  ganhoMensal = parseInt(prompt("digite o ganho de cada dependente"));

  ganhoTotal = ganhoTotal + ganhoMensal;
}


salarioBruto = ganhoTotal + salarioBruto;




rendaPerCapta = parseInt(salarioBruto / (dependentes + 1));

var ir = calc_ir(salarioBruto, rendaPerCapta) ;
 console.log("imposto a pagar de:",ir);
}

console.log("lista de salários:",arrSalarios);


soma = calc_media_menor(arrSalarios,media);

console.log("salários abaixo da média é de:",soma);



function calc_ir(salarioBruto, rendaPerCapta){
  if (rendaPerCapta >= 500) {
    console.log(
      "Renda familiar superior ou igual a R$500 reais", "e sua renda é de:",
      rendaPerCapta,
      "reais por isso será cobrado imposto."
    );
    if(salarioBruto < 1903.98){
  
      console.log("salario bruto de:",salarioBruto,"sua taxa é de 5%");
      var ir = salarioBruto * 5 / 100;
      console.log("salario liquido é de:", salarioBruto - ir, "foi descontado 5% sobre seu salario bruto, desconto foi de:", ir);
  
      arrSalarios.push(salarioBruto - ir);
  
      
  
    }else if (salarioBruto > 1903.98 && salarioBruto <= 2826.65){
  
      console.log("salario bruto de:",salarioBruto,"sua taxa é de 7,5%");
      var ir = salarioBruto * 7.5 / 100;
      console.log("salario liquido é de:", salarioBruto - ir, "foi descontado 7,5% sobre seu salario bruto, desconto foi de:", ir);
  
      arrSalarios.push(salarioBruto - ir);
  
    }else{
      console.log("salario bruto de:",salarioBruto,"sua taxa é de 15%");
      var ir = salarioBruto * 15 / 100;
      console.log("salario liquido é de:", salarioBruto - ir, "foi descontado 15% sobre seu salario bruto, desconto foi de:", ir);
  
      arrSalarios.push(salarioBruto - ir);
    }
  
  } else {
    console.log(
      "Renda familiar inferior a R$500 reais","sua renda é de:",
      rendaPerCapta,
      "reais, por isso fica isento de imposto."
    );
  }
  return ir;
}

function calc_media_menor(arrSalarios, media){

  for (let i = 0; i < arrSalarios.length; i++) {
    salarioTotal = salarioTotal + arrSalarios[i];
 
 }
  media = parseInt(salarioTotal / arrSalarios.length);  
 
 console.log("soma dos salários é de:",salarioTotal);
 
 console.log("media total dos salários é de:",media);
 
 for (let i = 0; i < arrSalarios.length; i++) {
  
   if (arrSalarios[i] < media) {
     soma++
   }
 }
  return soma;
}