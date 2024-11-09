function bike(cor, velocidade){
    this.cor=cor
    this.velocidade=velocidade
    this.velocidadeAtual=100
}

bike.prototype={
    acelerar:function(){
        this.velocidadeAtual += 2220
    }
}