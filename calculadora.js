    var valor;
    var resultado;
//function:cria funções dinamicamente
function botao(num) {
    valor = document.calc.visor.value +=num;
}//+= sinal de concatenação
function reset() {
    document.calc.visor.value= '';   
}
function calcule() {
   resultado = eval(valor);
   document.calc.visor.value = resultado. toLocaleString('pt-br')//toLocaleString:ele separa por virgula os numeros
   
}
/**eval:Haha, olha posso tentar explicar por aqui, mas basicamente é assim: 
vamos supor que eu tenha uma variável  com o valor de "2 + 2", ao passar essa
 variável como parâmetro para a função eval, como exemplo: eval(variável) ela
  vai executar como se aquilo fosse um código de verdade, saca? se for "2 + 2"
   ele vai retornar a soma de 2 + 2, caso o parâmetro que eu passo para ele fosse
    "8 / 4", o eval me retornaria 2, que é o resultado de 8 / 4**/
    