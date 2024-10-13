// Atividades funções Javascript
// 1) funçao soma (n1,n2) 
// 2) Função soma(n1,n2) com checagem if/else
// 3) Função nomeAltura(nome,altura) com checagem if/else
// 4) Função númeroParOuImpar(n1)
// 5) Função numeroParOuImpar (n1) com checagem if/else

 function dados1 (nome,altura) {
   console.log("Olá" + nome + "sua altura é" + altura)
 }
 dados1(Julio, 1.87)

function dados2(nome,altura) {
  if (typeof nome === "number" && typeof n2 === "number") {
    const res = n1 + n2
  console.log("resultado: "+res)
  }else {console.log ("erro")}}

function soma1(n1, n2) {
  const res = n1 + n2
  console.log("resultado: "+res)
}
// soma1("abobora",20)

function soma2(n1, n2) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    const res = n1 + n2
  console.log("resultado: "+res)
  }else {console.log ("erro")}}

function soma(n1, n2) {
  return n1 + n2;
}
function soma(n1, n2) {
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    return n1 + n2;
  } else {
    return 'Erro: Os argumentos devem ser números.';
  }
}

//nomeAltura
function nomeAltura(nome, altura) {
  if (typeof nome === 'string' && typeof altura === 'number') {
    return `Olá, ${nome}! Sua altura é ${altura} metros.`;
  } else {
    return 'Erro: O nome deve ser uma string e a altura deve ser um número.';
  }
}