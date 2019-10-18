'use strict';

const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    h1.textContent = x + "," + y;
document.body.style.backgroundColor = `rgb${red}%, ${green}%,${blue}%`

const red = x / width * 100; // 100%;
const blue = y / height * 100; // 100%;
const green = 100;

    //h1.textContent = `${e.screenX}, ${e.screenY}`;
    //h1.textContent = `${e.pageX}, ${e.pageY}`;
     // e. event, .target = mwowi na jakim elem. wykonywane jest zdarzenie

    //document.body.style.backgroundColor = `rgb(${e.clientX/3}, ${e.clientY/2},${e.clientX/e.clientY * 20})`;
    //  'rgb(' + (e.cllientX / 3) + ',', + (e.clientY/2) +  ',' + (e.clientX *20) + ')' );
});