window.$;

$(".carré").css({
    "border": "1px solid black",
    "height": "5rem",
    "width": "5rem",
    "display": "inline-block",
})

$(".rond").css({
    "border": "1px solid black",
    "height": "5rem",
    "width": "5rem",
    "display": "inline-block",
    "border-radius": "50%"
})

$(".losange").css({
    "border": "1px solid black",
    "height": "5rem",
    "width": "5rem",
    "display": "inline-block",
    "transform": "rotate(45deg)"
})

$("#contenu").css({
    "width": "490px",
    "height": "490px",
    "display": "flex",
    "flex-direction": "row",
    "flex-wrap": "wrap",
    "justify-content": "space-evenly",
    "align-item": "center",
})

let ronds = $('.rond');
let carre = $('.carré');
let losange = $('.losange');

$('#button').click(function (){
    ronds.toggleClass("color");
    carre.toggleClass("color");
    losange.toggleClass("color");
})

ronds.click(function (){
    $(this).toggleClass('color');
})

carre.click(function (){
    $(this).toggleClass('color');
    $(this).siblings().toggleClass("color");
})

losange.click(function (){
    $(this).toggleClass('color');
    $(this).siblings().toggleClass("color");
    $(".middle").toggleClass("color");
})

