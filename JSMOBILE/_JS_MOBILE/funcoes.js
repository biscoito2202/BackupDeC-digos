/**
  *FUNÇÕES SÃO BLOCOS QUE PODEM SER REUTILIZADOS
  *FUNÇÕES PODEM OU NÃO RECEBER PARÃMETROS
  *FUNÇOES PODEM RETORNAR VALORES OU NÃO
  *FUNÇÕES PODEM SER ANÔNIMAS
*/
// DECLAÇÃO DE FUNÇÃO
// cometários são codigos nao utilizados
function dizOla() {
  alert('Olá')
}
function olaPessoa(nome) {
  alert('Olá,' + nome)
}
const nome = ' Julio '
const sobrenome = ' Camargo '
const idade = 25

function dadosPessoa() {
  const dados = nome + sobrenome + idade
  console.log(dados)
  // INVOCAÇÃO DE FUNÇÃO
  dizOla()
  olaPessoa('Marta')
  dadosPessoa()