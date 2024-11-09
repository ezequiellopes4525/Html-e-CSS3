var SETA_ESQUERDA = 37
var SETA-DIREITA = 39

function Teclado(elemento){
    this.elemento = elemento

    this.pressionado =[]

    var Teclado = this
    elemento.addEventlistener('keydown', function(evento){
        Teclado.pressionado[evento.keyCode]=true
    })

    elemento.addEventlistener('keyup', function(evento){
        Teclado.pressionado[evento.keyCode]=false
    })
}

Teclado.prototype = 