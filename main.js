'use strict';

const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', function(e) {
    //h1.textContent = `${e.screenX}, ${e.screenY}`;
    //h1.textContent = `${e.pageX}, ${e.pageY}`;
    h1.textContent = (e.clientX + "," + e.clientY); // e. event, .target = mwowi na jakim elem. wykonywane jest zdarzenie

    document.body.style.backgroundColor = `rgb(${e.clientX/3}, ${e.clientY/2},${e.clientX/e.clientY * 20})`;
})