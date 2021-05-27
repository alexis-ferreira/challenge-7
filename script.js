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





let headerDiv = document.getElementById('header');
// console.log(headerDiv);

let headerBg = document.getElementById('blurHeader');
// console.log(headerBg);

if (screen.width > 450){
    headerDiv.addEventListener('mouseenter', function(){
        headerBg.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    })
}

if (screen.width > 450){
    headerDiv.addEventListener('mouseleave', function(){
        headerBg.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    })
}


// ------------- MENU BURGER -------------

let btnMenuBurger = document.getElementById('btnBurger');
// console.log(btnMenuBurger);

let menuBurger = document.getElementById('menuBurger');
// console.log(menuBurger);
// menuBurger.remove();

let closeMenu = document.getElementById('imgBtn');
// console.log(closeMenu);

let bodyScroll = document.getElementsByTagName('body');
// console.log(body[0]);

btnMenuBurger.addEventListener('click', function(){

    if (closeMenu.getAttribute('src') == './images/icon-hamburger.svg'){
    closeMenu.setAttribute('src', './images/icon-close.svg');
    menuBurger.style.width ='100%';
    bodyScroll[0].setAttribute('class', 'stop-scroll');
    }
    else{
        closeMenu.setAttribute('src', './images/icon-hamburger.svg');
        menuBurger.style.width ='0';
        bodyScroll[0].setAttribute('class', 'scroll');
    }
});




// -------- BTN SEE ALL --------

let btnSee = document.getElementById('btnSee');
// console.log(btnSee);

btnSee.addEventListener('mouseenter', function(){
    btnSee.style.backgroundColor = 'black';
    btnSee.style.color = 'white';
    btnSee.style.letterSpacing = '2px'
});

btnSee.addEventListener('mouseleave', function(){
    btnSee.style.backgroundColor = 'white';
    btnSee.style.color = 'black';
    btnSee.style.letterSpacing = '5px'
});

// Responsive

let picturesContainer = document.getElementsByClassName('pictures-container');
// console.log(picturesContainer[0]);
let containerTitle = document.getElementsByClassName('title');
// console.log(containerTitle[0]);


if (screen.width <=450){
    btnSee.remove();
    picturesContainer[0].insertAdjacentElement('beforeend', btnSee);
}


// RESPONSIVE IMAGE

let imgSrc = ['./images/mobile/image-deep-earth.jpg','./images/mobile/image-night-arcade.jpg','./images/mobile/image-soccer-team.jpg','./images/mobile/image-grid.jpg','./images/mobile/image-from-above.jpg','./images/mobile/image-pocket-borealis.jpg','./images/mobile/image-curiosity.jpg','./images/mobile/image-fisheye.jpg'];
// console.log(imgSrc);

let image = document.getElementsByClassName('imgResponsive');
// console.log(image);

if (screen.width <=450){
    for (let i = 0; i < imgSrc.length; i++){
        image[i].setAttribute('src',imgSrc[i]);
        // console.log(image[i]);
    }
}








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