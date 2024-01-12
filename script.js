const botao1 = document.querySelector('.botao1');
const botao2 = document.querySelector('.botao2');
const botao3 = document.querySelector('.botao3');
const botao4 = document.querySelector('.botao4');
const botao5 = document.querySelector('.botao5');
const botao6 = document.querySelector('.botao6');
const botao7 = document.querySelector('.botao7');
const botao8 = document.querySelector('.botao8');
const botao9 = document.querySelector('.botao9');
const botao0 = document.querySelector('.botao0');
const candidato = document.getElementById('#candidato');
const visor = document.querySelector('#visor');


function clique1(){
    visor.value += 1;
}
function clique2(){
    visor.value += 2;
}
function clique3(){
    visor.value += 3;
}
function clique4(){
    visor.value += 4;
}
function clique5(){
    visor.value += 4;
}
function clique6(){
    visor.value += 6;
}
function clique7(){
    visor.value += 7;
}
function clique8(){
    visor.value += 8;
}
function clique9(){
    visor.value += 9;
}
function clique0(){
    visor.value += 0;
}
function branco(){
    visor.value = "";
    document.querySelector('#candidato').src = "img/Brasao.jpg";
}
function confirma(){
    if (visor.value = 10){
        document.querySelector('#candidato').src = "img/candidato1.jfif";
    }
}