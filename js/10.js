const secondCard = document.querySelector('.card2-1');
const container = document.querySelector(".container");
const secondInner = document.querySelector(".second-section-inner");
const secondTop = document.querySelector(".second-section-top");
const secondWaxom = document.querySelector('.second-section-middle-text');
const fourthTop = document.querySelector('.fourth-section-top');
const li6 = document.querySelectorAll('.li6');
const text6 = document.querySelector('.sixth-section-right-text');
const block7_1 = document.querySelector('.block7-1x');
const block7_2 = document.querySelector('.block7-2x');
const block7_3 = document.querySelector('.block7-3x');
const block7_4 = document.querySelector('.block7-4x');
const block7_5 = document.querySelector('.block7-5x');
const blocks7 = document.querySelectorAll('.seven-section-block');
const blocks8 = document.querySelectorAll('.eight-section-bottom-card');
const block8_1 = document.querySelector('.card8-1x');
const block8_3 = document.querySelector('.card8-3x');
const tenthImg1 = document.querySelector('.tenth-img1x');
const tenthImg2 = document.querySelector('.tenth-img2x');
const tenthImg3 = document.querySelector('.tenth-img3x');
const tenthImg4 = document.querySelector('.tenth-img4x');
const tenth4H3x = document.querySelector('.tenth4-h3x');
const column10 = document.querySelectorAll('.column-10x')

window.onscroll = function() {scrollFunction()}

function scrollFunction(){
         if(window.scrollY > 250){
        secondTop.classList.remove('top-move1');

    }
    else if (window.scrollY < 250) {
        secondTop.classList.add('top-move1');
    }
    if (window.scrollY > 1500) {
        secondTop.classList.add('top-move2');
    }
    else if (window.scrollY > 250 && window.scrollY < 1500) {
        secondTop.classList.remove('top-move2');
    }
    if(window.scrollY > 700){
        secondWaxom.classList.add('second-section-middle-text-active');

}
else if (window.scrollY < 700) {
    secondWaxom.classList.remove('second-section-middle-text-active');
}
    if(window.scrollY > 1500){
        secondWaxom.classList.add('second-section-middle-text-active2');

}
else if (window.scrollY < 1500) {
    secondWaxom.classList.remove('second-section-middle-text-active2');
}
if(window.scrollY > 1500){
        fourthTop.classList.add('fourth-section-top-active');
}
else if (window.scrollY < 1500) {
    fourthTop.classList.remove('fourth-section-top-active');
}
const li4 = document.querySelectorAll('.li4');
if(window.scrollY > 2000){
    li4.forEach(elem =>{
        elem.classList.add('li4-vertical')
})}
else{
    if(li4.contains('li4-vertical')){
        li4.classList.remove('li4-vertical')  //!сработає 1 раз тількі, а з тим шо внизу тіпа постійно буде
    }
}
// else if(window.scrollY < 2000){
//     li4.forEach(elem =>{
//         elem.classList.remove('li4-vertical')
// })}
if(window.scrollY > 2700){
    fourthTop.classList.add('fourth-section-top-active2');

}
else if (window.scrollY < 2700) {
fourthTop.classList.remove('fourth-section-top-active2');
}

if(window.scrollY > 3700 && window.scrollY < 4600){
    li6.forEach(elem =>{
        elem.classList.add('li6-horizontal')
})}
else if(window.scrollY > 4600 || window.scrollY < 3700)  {
    li6.forEach(elem =>{
        elem.classList.remove('li6-horizontal')
})}
if(window.scrollY > 4600){
    text6.classList.add('sixth-section-right-text-move');
}
else if(window.scrollY < 4600){
    text6.classList.remove('sixth-section-right-text-move');
}
if(window.scrollY > 4600){
    block7_1.classList.add('block7-1');
    block7_2.classList.add('block7-2');
    block7_3.classList.add('block7-3');
    block7_4.classList.add('block7-4');
    block7_5.classList.add('block7-5');
}
else if(window.scrollY < 4600){
    block7_1.classList.remove('block7-1');
    block7_2.classList.remove('block7-2');
    block7_3.classList.remove('block7-3');
    block7_4.classList.remove('block7-4');
    block7_5.classList.remove('block7-5');
}
if(window.scrollY > 5350 && window.scrollY < 6400){
    blocks7.forEach(elem =>{
        elem.classList.add('seven-section-block-end')
})}
else if(window.scrollY > 6400 || window.scrollY < 5400)  {
    blocks7.forEach(elem =>{
        elem.classList.remove('seven-section-block-end')
})}

if(window.scrollY > 4400){
    block8_1.classList.add('card8-1');
    block8_3.classList.add('card8-3');
}
else if(window.scrollY < 4400){
    block8_1.classList.remove('card8-1');
    block8_3.classList.remove('card8-3');
}

if(window.scrollY > 5850 && window.scrollY < 6400){
    blocks8.forEach(elem =>{
        elem.classList.add('eight-section-bottom-card-end')
})}
else if(window.scrollY > 6400 || window.scrollY < 5850)  {
    blocks8.forEach(elem =>{
        elem.classList.remove('eight-section-bottom-card-end')
})}

if(window.scrollY > 6200){
    tenthImg1.classList.add('tenth-img1');
    tenthImg2.classList.add('tenth-img2');
    tenthImg3.classList.add('tenth-img3');
    tenthImg4.classList.add('tenth-img4');
    tenth4H3x.classList.add('tenth4-h3');
    column10.forEach(elem =>{
        elem.classList.add('column-10')
})}

else if(window.scrollY > 0 && window.scrollY < 6000){
    tenthImg1.classList.remove('tenth-img1');
    tenthImg2.classList.remove('tenth-img2');
    tenthImg3.classList.remove('tenth-img3');
    tenth4H3x.classList.remove('tenth4-h3');
    column10.forEach(elem =>{
        elem.classList.remove('column-10')
})}
}


//!!!! else {
//     if (text6.contains('sixth-section-right-text-move')){
//     text6.classList.add('sixth-section-right-text-move2')}
// }