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
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Добро пожаловать в калькулятор!");

rl.question("Введите первое число: ", (a) => {
  rl.question("Введите оператор (+, -, *, /): ", (op) => {
    console.log(`Число: ${a}, оператор: ${op}`);
    rl.close();
  });
});
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Добро пожаловать в калькулятор!");

rl.question("Введите первое число: ", (a) => {
  rl.question("Введите оператор (+, -, *, /): ", (op) => {
    rl.question("Введите второе число: ", (b) => {
      console.log(`${a} ${op} ${b}`);
      rl.close();
    });
  });
});
function calculate(a, op, b) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return null;
  }
}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(a, op, b) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return null;
  }
}

console.log("Добро пожаловать в калькулятор!");

rl.question("Введите первое число: ", (a) => {
  rl.question("Введите оператор (+, -, *, /): ", (op) => {
    rl.question("Введите второе число: ", (b) => {
      const result = calculate(parseFloat(a), op, parseFloat(b));
      console.log(`Результат: ${result}`);
      rl.close();
    });
  });
});
