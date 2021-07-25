let counteNumber = document.querySelector('.counter-number');


let counter = 0;


let timeId = setInterval( ()=> {

    counteNumber.innerHTML = counter;

    counter++;

    if ( counter >= 1695) {
        clearTimeout(timeId);
    }
}, 10);