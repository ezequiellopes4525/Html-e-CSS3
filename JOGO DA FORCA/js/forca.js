let tentativas=6;
let listaDinamica=[]
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras=[
    palavra001={
        nome:"IRLANDA",
        categoria:"LUGARES"
    },
    palavra002={
        nome:"EQUADOR",
        categoria:"LUGARES"
    },
    palavra003={
        nome:"CHILE",
        categoria:"LUGARES"
    },
    palavra004={
        nome:"INDONESIA",
        categoria:"LUGARES"
    },
    palavra005={
        nome:"MALDIVAS",
        categoria:"LUGARES"
    },
    palavra006={
        nome:"INGLATERRA",
        categoria:"LUGARES"
    },
    palavra007={
        nome:"GROELANDIA",
        categoria:"LUGARES"
    },
    palavra008={
        nome:"UZBEQUISTAO",
        categoria:"LUGARES"
    },
    palavra009={
        nome:"INDONESIA",
        categoria:"LUGARES"
    },
    palavra010={
        nome:"CREGUENHEM",
        categoria:"LUGARES"
    },
    palavra011={
        nome:"CARRO",
        categoria:"TRANSPORTE"
    },
    palavra012={
        nome:"BICICLETA",
        categoria:"TRANSPORTE"
    },
    palavra013={
        nome:"LANCHA",
        categoria:"TRANSPORTE"
    },
    palavra014={
        nome:"NAVIO",
        categoria:"TRANSPORTE"
    },
    palavra016={
        nome:"TELEFERICO",
        categoria:"MOTOCICLETA"
    },
    palavra017={
        nome:"BARCO",
        categoria:"TRANSPORTE"
    },
    palavra018={
        nome:"AERONAVE",
        categoria:"TRANSPORTE"
    },
    palavra019={
        nome:"TREM",
        categoria:"LUGARES"
    },
    palavra020={
        nome:"FUNICULAR",
        categoria:"TRANSPORTE"
    },
    palavra021={
        nome:"ZEBRA",
        categoria:"ANIMAIS"
    },
    palavra022={
        nome:"CAVALO",
        categoria:"ANIMAIS"
    },
    palavra023={
        nome:"ONÇA",
        categoria:"ANIMAIS"
    },
    palavra024={
        nome:"GALINHA",
        categoria:"ANIMAIS"
    },
    palavra025={
        nome:"LEOPARDO",
        categoria:"ANIMAIS"
    },
    palavra026={
        nome:"GIRAFA",
        categoria:"ANIMAIS"
    },
    palavra027={
        nome:"CAMELO",
        categoria:"ANIMAIS"
    },
    palavra028={
        nome:"ELEFANTE",
        categoria:"ANIMAIS"
    },
    palavra029={
        nome:"TIGRE",
        categoria:"ANIMAIS"
    },
    palavra030={
        nome:"RATO",
        categoria:"ANIMAIS"
    },
    palavra031={
        nome:"LAZANHA",
        categoria:"COMIDA"
    },
    palavra032={
        nome:"MACARRAO",
        categoria:"COMIDA"
    },
    palavra033={
        nome:"FEIJAO",
        categoria:"COMIDA"
    },
    palavra034={
        nome:"BIFE",
        categoria:"COMIDA"
    },
    palavra035={
        nome:"SARDINHA",
        categoria:"COMIDA"
    },
    palavra036={
        nome:"PEIXE",
        categoria:"COMIDA"
    },
    palavra037={
        nome:"HAMBURGUE",
        categoria:"COMIDA"
    },
    palavra038={
        nome:"PIZZA",
        categoria:"COMIDA"
    },
    palavra039={
        nome:"NHOQUE",
        categoria:"COMIDA"
    },
    palavra040={
        nome:"BATATA",
        categoria:"COMIDA"
    },
    palavra041={
        nome:"AÇÃO",
        categoria:"FILME"
    },
    palavra042={
        nome:"ROMANCE",
        categoria:"FILME"
    },
    palavra043={
        nome:"FAROESTE",
        categoria:"FILME"
    },
    palavra044={
        nome:"CIENTIFICO",
        categoria:"FILME"
    },
    palavra045={
        nome:"DOCUMENTARIO",
        categoria:"FILME"
    },
    palavra046={
        nome:"POLICIAL",
        categoria:"FILME"
    },
    palavra047={
        nome:"SERIE",
        categoria:"FILME"
    },
    palavra048={
        nome:"POLITICO",
        categoria:"FILME"
    },
    palavra049={
        nome:"DESENHO",
        categoria:"FILME"
    },
    palavra050={
        nome:"COMEDIA",
        categoria:"FILME"
    },
    palavra051={
        nome:"A ERA DO GELO",
        categoria:"TV E CINEMA"
    },
    palavra052={
        nome:"HOMEN ARANHA",
        categoria:"TV E CINEMA"
    },
    palavra053={
        nome:"CASA MONSTRO",
        categoria:"TV E CINEMA"
    },
    palavra054={
        nome:"TELA QUENTE",
        categoria:"TV E CINEMA"
    },
    palavra055={
        nome:"STRANGER THINGS",
        categoria:"TV E CINEMA"
    },
    palavra056={
        nome:"O REI DO GADO",
        categoria:"TV E CINEMA"
    },
    palavra057={
        nome:"MULHER MARAVILHA",
        categoria:"TV E CINEMA"
    },
    palavra058={
        nome:"BOB ESPONJA",
        categoria:"TV E CINEMA"
    },
    palavra059={
        nome:"O INCRIVEL HULK",
        categoria:"TV E CINEMA"
    },
    palavra060={
        nome:"COMEDIA",
        categoria:"FILME"
    }
];

let jogoAutomatico =true;

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra=parseInt(Math.random()*palavras.length)

    palavraSecretaSorteada=palavras[indexPalavra].nome;
    palavraSecretaCategoria=palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria=document.getElementById("categoria");
    categoria.innerHTML=palavraSecretaCategoria;

    const palavraTela=document.getElementById("palavra-secreta");
    palavraTela.innerHTML="";
    
    for(i=0;i<palavraSecretaSorteada.length;i++){
        if (listaDinamica[i]==undefined){
            if (palavraSecretaSorteada[i]==" ") {
                listaDinamica[i]=" ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" +listaDinamica[i] +"</div"
            }
            else{
                listaDinamica[i]="&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div"
            }            
        }
        else{
            if (palavraSecretaSorteada[i] ==" "){
                listaDinamica[i]==" ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" +listaDinamica[i] +"</div"
            }
            else{
                palavraTela.innerHTML=palavraTela.innerHTML+"<div class='letras'>" +listaDinamica[i] +"</div"
            }
            
        }
    }   
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled=true;
    if (tentativas >0)
    {
        mudaStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }
}    
function mudaStyleLetra(tecla, condicao){
    if(condicao==false)
    {
        document.getElementById(tecla).style.background="#c71585";
        document.getElementById(tecla).style.color="#ffffff";
    }
    else{
        document.getElementById(tecla).style.background="#008000";
        document.getElementById(tecla).style.color="#ffffff";    
    }
}
function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos<0){
        tentativas--
        carregaImagemForca();

        if(tentativas==0){
            abreModal("OPS!", "Não foi dessa vez... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
       
    }
    else{
        mudaStyleLetra("tecla-" + letra,)
        for(i=0; i< palavraSecretaSorteada.length; i++)
        {
            if(palavraSecretaSorteada[i]==letra){
                listaDinamica[i]=letra;
            }
        }
    }
    let vitoria=true;
    for (i=0; i<palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i]!=listaDinamica[i]){
            vitoria=false;
        }
    }
    if(vitoria==true)
    {
        abreModal("PARABNS!", "VOCÊ VENCEU...! <br>");
        tentativas=0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background="url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background="url('./img/forca02.png')";
            break;   
        case 3:
            document.getElementById("imagem").style.background="url('./img/forca03.png')";
            break;  
        case 2:
            document.getElementById("imagem").style.background="url('./img/forca04.png')";
            break; 
        case 1:
            document.getElementById("imagem").style.background="url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background="url('./img/forca06.png')";
            break;  
            document.getElementById("imagem").style.background="url('./img/forca.png')";
        default:
    }
}
function abreModal(titulo, mensagem){
    let modalTitulo=document.getElementById("exampleModalLabel");
    modalTitulo.innerText=titulo;

    let modalBody=document.getElementById("modalBody");
    modalBody.innerHTML=mensagem;



    $("#myModal").modal({
        show:true
    });
}
let btnReiniciar=document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
    location.reload();
});

function listaAutomatico(){//ativa o modo manual
    if (jogoAutomatico == true){
        document.getElementById("jogarAutomatico").innerHTML="<i class='bx bx-play-circle'></i>"
        jogoAutomatico=false;

        document.getElementById("abreModalAddPalavra").style.display="block";
        document.getElementById("status").style.display="Modo Manual";

    }
    else if(jogoAutomatico==false){//ativa o modo automatico
        document.getElementById("jogarAutomatico").innerHTML="<i class='bx bx-pause-circle'></i>"
        jogoAutomatico = true;

        document.getElementById("abreModalAddPalavra").style.display="none";
        document.getElementById("status").style.display="Modo Automático";

        status
    }
}

const modal = document.getElementById("modal-alerta");
const btnAbreModal = document.getElementById("abreModalAddPalavra");
btnAbreModal.onclick=function(){    
    modal.style.display="block"
}

const btnFechaModal = document.getElementById("fechaModal");
btnFechaModal.onclick=function(){    
    modal.style.display="none"
    document.getElementById("addPalavra").value="";
    document.getElementById("addCategoria").value="";
    
}

window.onclick=function(){  
    if (event.target==modal){     
        modal.style.display="none"
        document.getElementById("addPalavra").value="";
        document.getElementById("addCategoria").value="";    
    }
}
function carregaListaAutomatica(){
    
}