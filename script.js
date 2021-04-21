var precoEmRupiasTxt = prompt("Qual o preço da moto na Índia, em Rúpias?")
var precoEmRupiaNr = parseFloat(precoEmRupiasTxt)
var cotacaoDolarRupiasTxt = prompt("Qual a contação Dolar/Rúpias do dia?")
var cotacaoDolarRupiasNr = parseFloat(cotacaoDolarRupiasTxt)
var precoNoBrasilTxt = prompt("Qual o preço da moto no Brasil?")
var precoNoBrasilNr = parseFloat(precoNoBrasilTxt)
var cotacaoDolarReaisTxt = prompt("Qual a cotação Dolar/Reais do dia?")
var cotacaoDolarReaisNr = parseFloat(cotacaoDolarReaisTxt)
var precoEmDolar = precoEmRupiaNr/cotacaoDolarRupiasNr
var precoEmRealSemImposto = precoEmDolar*cotacaoDolarReaisNr
var impostoBruto = precoNoBrasilNr-precoEmRealSemImposto
var imposto = impostoBruto.toFixed(2)
alert("O total do imposto cobrado é: R$" + imposto)

//revisão
// variáveis: var Int, Float, String
// funçãoes: alert parseInt parseFloat prompt
// operações: + e *
// comentários