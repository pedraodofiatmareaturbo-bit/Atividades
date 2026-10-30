//questao 2
let nota1 = 1;
let nota2 = 10;
let media = (nota1 + nota2) / 2;
console.log("sua média é", media); 

// questao 5
const produto = "Abacate"; 
let precouni = 15; 
let quant = 150; 
let dispestoque = 150; 

console.log(produto, precouni, quant, dispestoque); 

//questao 6
let produto = "mouse";
let preco = 100;
let desc = 12 / 100;
let precofinal = preco - (preco * desc);
valordesconto = desc * 100

console.log(produto, preco, desc, precofinal, valordesconto);


// questao 9
let numerinho = 14; 
let numero = 15; 
let numeraco = 16; 

if (numerinho >= numero && numerinho >= numeraco) { 
  console.log(numerinho); 
} 
else if (numero >= numerinho && numero >= numeraco) { 
  console.log(numero); 
} 
else (numeraco >= numerinho && numeraco >= numero); 
  console.log(numeraco); 

  // questao 10
  let aluno = { 
  nota: 8, frequencia: 0.80 
} 
if 
  (aluno.nota >= 7 && aluno.frequencia >= 0.75) { 
  console.log("aprovado") 
} 
else if (aluno.nota >= 7 && aluno.frequencia < 0.75) { 
  console.log("recuperação por falta") 
} 
else if (aluno.nota < 7 && aluno.frequencia >= 0.75) { 
  console.log("recuperação por nota") 
} 


//questao 12
let pares = "" 

for (let i = 2; i <= 20; i++) { 
  if (i % 2 == 0) 
    pares += i + " " 
} 
console.log(pares) 

//questao 14
let soma = 0 

for (let i = 1; i <= 50; i++) { 
  soma += i 
} 
console.log(soma) 

//questao 15
let calc = "" let numerinho = 5;
for (let i = 1; i <= 10; i++) { calc += numerinho + " * " + i + " = " + numerinho * i + "\n" } console.log(calc);

//questao 16
let produtos = ["Mouse", "Teclado", "Webcam"]; 
produtos.push("Monitor"); 
console.log(produtos); 

//questao 17
let notas = [ 
  5, 6, 7, 9, 7 
] 
let notafinal = 0; 

for (let i = 0; i < notas.length; i++) { 
  let nota = notas[i];
  notafinal += nota;
} 
console.log(notafinal/notas.length);