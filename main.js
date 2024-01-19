

alert("Hola Mundo, revisa la consola");

alert("Bienvenida y bienvenido a mi sitio web");

let name = "Luna";
let age = 23;
let sales = 50;
let sales_total = 1000;

alert("¡Error! Completa todos los campos")

const messageERROR = "¡Error! Completa todos los campos";

alert(messageERROR);

name = prompt("Ingrese su nombre");

age = prompt("Ingrese su edad");

let number = prompt("Ingrese un numero");
const numberSecret = 5;

console.log("Hola Mundo");

if (number != numberSecret) {
    console.log("El numero ingresado es: " + number);
}

if (age >= 18) {
    console.log("Es mayor de edad");
}

let anwser = prompt("Que dia de la semana es hoy?: ");

if (anwser == "viernes" || anwser == "sabado" || anwser == "domingo") {
    alert("Feliz fin de semana");
} else {
    alert("Aguanta que ya es viernes");
}

let number1 = prompt("Dime un numero: ");

if (number1 < 0) {
    alert("El numero es negativo");
} else if (number1 > 0) {
    alert("El numero es positivo");
} else {
    alert("El numero es 0");
}

let poitns = 100;

if (points >= 100) {
    console.log("Tienes un premio");
} else if (points >= 50) {
    console.log("Tienes un premio pequeño");
} else {
    console.log("No tienes premio");
}

let saldo = 1000;

if (saldo > 0) {
    console.log(`Tu saldo es ${saldo} y parece ser positivo`);
} else if  (saldo < 0) {
    console.log(`Tu saldo es ${saldo} y parece ser negativo`);
} else {
    console.log(`Tu saldo parece ser nulo`);
}

let name_welcome = prompt("Dime tu nombre: ");

alert(`Bienvenido ${name_welcome}`);

let count1 = 0;

while (count1 < 11) {
    console.log(count1);
    count1++;
}

while (count1 < 1) {
    console.log(count1);
    count1--;
}

let limit1 = parseInt(prompt("Dime el limite de la cuenta regresiva:  "));

while (limit1 < 1) {
    console.log(limit1);
    limit1--;
}

let limit2 = parseInt(prompt("Dime el limite de la cuenta progresiva:  "));
let count2 = 0;

while (count2 < (limit2 + 1)) {
    console.log(count2);
    count2++;
}


function print_msg() {console.log("¡Hola, mundo");}

function print_name(name) {console.log(`¡Hola ${name}`);}

function print_number(num) {console.log(`El doble de ese numero ingresado es: ${num*2}`);}

function print_sum(num1, num2, num3) {console.log(`El promedio de los numeros ingresados es: ${(num1 + num2 + num3)/3}`);}

function mayor(num1, num2) {console.log("El primer numero es"+( num1 > num2 ? "mayor": "menor o igual")+"al segundo numero");}

function exp_(num1) {console.log(num1*num1);}


function imc_calculate(height, weight) {return weight/(height*height);}

function factorial(num) {if (num === 0) {return 1;} else {return num * factorial(num - 1);}}

function area(height, weight) {return weight*height};

function area_circle(radius) {return Math.PI*radius*radius;}

function table_of_multiplication(num) {for (let i = 1; i < 11; i++) {console.log(`${num} x ${i} = ${num*i}`);}}