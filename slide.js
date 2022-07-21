/**
 * Slide Show Simples
 * @author Letícia França
 */

let intervalo = 2000;

function slide1(){
    document.querySelector("#banner").src = "/img/banner01.jpg";
    setTimeout("slide2()",intervalo);
}

function slide2(){
    document.querySelector("#banner").src = "/img/banner02.jpg";
    setTimeout("slide3()",intervalo);
}

function slide3(){
    document.querySelector("#banner").src = "/img/banner03.jpg";
    setTimeout("slide1()",intervalo);
}