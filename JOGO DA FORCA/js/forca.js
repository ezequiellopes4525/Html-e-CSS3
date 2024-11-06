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
        nome:"UZBEQUISTÃO",
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
        nome:"MACARRÃO",
        categoria:"COMIDA"
    },
    palavra033={
        nome:"FEIJÃO",
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
        nome:"SÉRIE",
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
    }
];

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
            listaDinamica[i]="&nbsp;"
            palavraTela.innerHTML=palavraTela.innerHTML+"<div class='letras'>" +listaDinamica[i] +"</div"
        }
        else{
            palavraTela.innerHTML=palavraTela.innerHTML+"<div class='letras'>" +listaDinamica[i] +"</div"
        }
    }


}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disable=true;
    if (tentativas >0)
    {
        mudaStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }
}    
function mudaStyleLetra(tecla){
    document.getElementById(tecla).style.background="#c71585";
    document.getElementById(tecla).style.color="#ffffff";
}
function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos<0){
        tentativas--
        carregaImagemForca();
        //verificar se ainda tem tentativas//imagem
    }
    else{
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
        //mensagem na tela
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

