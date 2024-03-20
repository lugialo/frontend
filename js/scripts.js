// console.log(typeof 2);
// console.log(typeof 2.2);
// console.log(typeof -2);

// console.log(2 + 2);
// console.log(3 - 2);
// console.log(3 * 2);
// console.log(4 / 2);
// console.log(4 ** 2);
// console.log(4 % 2);

console.log(typeof true);
console.log(typeof false);

console.log(5 == "5");
console.log(5 === "5");
console.log("javascript é uma merda vsfd");
console.log(10 > 3 || 2 > 10);
console.log(!true);

//declaração de variáveis
var a = 2;
let b = 3;

if (true) {
  console.log(a);
  console.log(b);

  var d = 5;
  let e = 7;
  const f = 9;
}

// console.log(d); n pode ser acessada de fora do bloco
// console.log(e);

const user = false;
user ? console.log("bem-vindo") : console.log("beijos da nutri");

// operador ternário -> equivale ao if-else

const curso = "OK";

switch (curso) {
  case "SW":
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    break;
  case "OK":
    console.log("lourenço games");
    break;
}

//laço de repetiçao
i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

k = 0;
do {
  console.log(0);
  k++;
} while (k < 10);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// função sem passagem de parametro
function myFunction() {
  console.log("olar");
}

const myFunction2 = () => {
  console.log("beijos da nutri");
};

myFunction();
myFunction2();

function defineParOuImpar(numero) {
  if (numero % 2 === 0) {
    console.log(`${numero} é par!`);
  } else {
    console.log(`${numero} é ímpar!`);
  }
}

function sep() {
  console.log("-----------------------------------------------");
}

defineParOuImpar(2);

const defineParOuImpar3 = (numero) => {
  numero % 2 === 0
    ? console.log(`${numero} é par!`)
    : console.log(`${numero} é ímpar.`);
};

function calculaRaiz(numero) {
  return Math.sqrt(numero);
}

const resultado = calculaRaiz(81);
console.log(calculaRaiz(64));

const calculaRaiz2 = (numero) => {
  return Math.sqrt(numero);
};

calculaRaiz2(4);

let nomes = ["João", "Ana", "Pedro", "Yuri"];
console.log(nomes);
nomes[0] = "Rodrigo";
console.log(nomes);
sep();
console.log(nomes.length);
sep();
console.log(Object.keys(nomes));
sep();
nomes.push("Maria");
nomes.unshift("Daniel");

nomes.pop();
console.log(nomes);

const numbers = [20, 10, 50, 100];
const filteredNumbers = numbers.filter((number) => number > 10);
console.log(filteredNumbers);

const foundNumber = numbers.find((number) => number > 10);
console.log(foundNumber);

const foundIndex = numbers.findIndex((number) => number > 10);
console.log(foundIndex);

const slicedNumbers = numbers.slice(0, 3);
console.log(slicedNumbers);

const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

for (let i = 0; i++; numbers.length) {
  console.log(number[i]);
}

numbers.forEach((number) => console.log(number));

numbers.map((number) => console.log(number));
const newNumbers = numbers.map((number) => number * 2);
