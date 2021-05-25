'use strict';

// -------- MENU HEADER --------
let borderBtnMenu = document.getElementsByClassName('borderHover');
// console.log(borderBtnMenu);

let hoverBtnMenu = document.getElementsByClassName('btn-menu')
// console.log(hoverBtnMenu);

for (let i=0; i<hoverBtnMenu.length; i++){
    hoverBtnMenu[i].addEventListener('mouseenter', function(){
        borderBtnMenu[i].style.width='25px'
    })
};

for (let i=0; i<hoverBtnMenu.length; i++){
    hoverBtnMenu[i].addEventListener('mouseleave', function(){
        borderBtnMenu[i].style.width='0px'
    })
};




// -------- BTN SEE ALL --------

let btnSee = document.getElementById('btnSee');
// console.log(btnSee);

btnSee.addEventListener('mouseenter', function(){
    btnSee.style.backgroundColor = 'black';
    btnSee.style.color = 'white';
});

btnSee.addEventListener('mouseleave', function(){
    btnSee.style.backgroundColor = 'white';
    btnSee.style.color = 'black';
});



// -------- ANIMATION PICTURES --------
let imgHover = document.getElementsByClassName('img');
// console.log(imgHover);
let figCaption = document.getElementsByTagName('figcaption');
// console.log(figCaption);

let hoverBackground = document.getElementsByClassName('hoverBackground');

for (let i=0; i<imgHover.length; i++){
    imgHover[i].addEventListener('mouseenter', function(){
        hoverBackground[i].style.height = '100%';
        figCaption[i].style.background = 'none';
        figCaption[i].style.color = 'black';
    })
};

for (let i=0; i<imgHover.length; i++){
    imgHover[i].addEventListener('mouseleave', function(){
        hoverBackground[i].style.height = '0%';
        figCaption[i].style.background = 'linear-gradient(#fff0, #000000c7)';
        figCaption[i].style.color = 'white';
    })
};




// -------- SOCIAL MEDIA FOOTER --------

let favicon = document.getElementsByClassName('fab');
// console.log(favicon);

let hoverBorderSocialFooter = document.getElementsByClassName('borderHoverSocial')
// console.log(hoverBorderSocialFooter);

for (let i=0; i<favicon.length; i++){
    favicon[i].addEventListener('mouseenter', function(){
        hoverBorderSocialFooter[i].style.width='20px'
    })
};

for (let i=0; i<favicon.length; i++){
    favicon[i].addEventListener('mouseleave', function(){
        hoverBorderSocialFooter[i].style.width='0px'
    })
};




// -------- MENU FOOTER --------

let btnMenuFooter = document.getElementsByClassName('btn-menu-footer');
// console.log(favicon);

let borderHoverFooter = document.getElementsByClassName('borderHoverFooter')
// console.log(hoverBorderSocialFooter);

for (let i=0; i<btnMenuFooter.length; i++){
    btnMenuFooter[i].addEventListener('mouseenter', function(){
        borderHoverFooter[i].style.width='25px'
    })
};

for (let i=0; i<btnMenuFooter.length; i++){
    btnMenuFooter[i].addEventListener('mouseleave', function(){
        borderHoverFooter[i].style.width='0px'
    })
};