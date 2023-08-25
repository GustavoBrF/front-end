//Declarando e Atrbuindo Valores

let idade =25;
const nome = "João"
const anoNascimento= 1998;

//Imprimindo os valores das váriaveis

console.log("Nome:",nome);
console.log("Idade:",idade);
console.log("Ano de Nascimento:", anoNascimento);

//Atualizando Váriaves

let contador= 0
contador++; //Incremento 1
contador*= 2; // Mutilplicação por 2
contador -= 3; // Subtração por 3

console.log("Valor do contador.", contador);

//Usando Váriaveis em mensagens

const fruta = "maçã"
const quantidade = 5;
const mensagem = `Eu comprei ${quantidade} unidades de ${fruta}.`;

console.log(mensagem)

//Conversão de Unidades

const metros= 3;
const centimetros = metros * 100;

console.log(`${metros} metros são equivalente a ${centimetros} centimetros`)

//Conversão de temperatura de Celsius para Fahrenheit

const temperaturaCelcius = 25;
const temperaturaFahrenheit= temperaturaCelcius * 9/5 + 32;

console.log (`${temperaturaCelcius}°C é igual a ${temperaturaFahrenheit} °F`);