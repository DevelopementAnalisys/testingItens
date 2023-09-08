const peso1 = 1.0
const peso2 = Number('2.1')
console.log(peso1, peso2)
//Função typeof() utilizada para verificação do tipo primitivo 
console.log(typeof(peso1), typeof(peso2))
//Função isInteger() utilizada para verificar se o numero referente é inteiro
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const av1 = 9.871
const av2 = 6.871

const total = av1 * peso1 + av2 * peso2
const media = total / (peso1 + peso2)
//Função toFixed() utilizada para fixar a quantidade de casas decimais
console.log(media.toFixed(2))
//Função para transformação de um tipo númerico em string toString()
console.log(typeof(media.toString()))
//Se passarmos o parámetro 2 dentro da função toString nosso número é convertido
//Para um número binário e assim ocorre para octal, hexadecimal, decimal, etc..
console.log(media.toString(2))
    