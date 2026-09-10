console.log("Добро пожаловать в калькулятор!");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Добро пожаловать в калькулятор!");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Добро пожаловать в калькулятор!");

rl.question("Введите первое число: ", (a) => {
  console.log(`Вы ввели: ${a}`);
  rl.close();
});
