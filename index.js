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
        salarioBruto,"\n"
      );
    } else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
      let salarioLiquido = (salarioBruto * 7.5) / 100;
  
      console.log(
        "seu salário liquido é de R$",
        salarioBruto - salarioLiquido,
        "Você",
        nome,
        "foi taxado em 7.5% sobre seu salário bruto de R$",
        salarioBruto,"\n"
      );
    } else {
      let salarioLiquido = (salarioBruto * 15) / 100;
  
      console.log(
        "seu salário liquido é de R$",
        salarioBruto - salarioLiquido,
        "Você",
        nome,
        "foi taxado em 15% sobre seu salário bruto de R$",
        salarioBruto,"\n"
      );
    }
  } else {
    console.log(
      "Renda familia de R$",
      rendaFamiliar,
      "reais por pessoa.",
      "Por isso não será cobrado nenhuma taxa, motivo renda familiar abaixo de R$ 500 reais por pessoa\n"
    );
  }
}

