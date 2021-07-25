let counteNumber = document.querySelector('.counter-number');


let counter = 0;

let counterV = 0;

let counterC = 0;


let timeIdNumber = setInterval( ()=> {

    counteNumber.innerHTML = counter;
    counter++;

    if ( counter >= 1695) {
        clearTimeout(timeIdNumber);
    }
}, 9);

let counterVisitors = document.querySelector('.counter-visitors');

let timeIdVisitors = setInterval ( ()=> {

    counterVisitors.innerHTML = counterV;
    counterV++;

    if ( counterV >= 960) {
        clearTimeout(timeIdVisitors);
    }

}, 11);

let conversion = document.querySelector('.counter-conversion');

let timeIdConversion = setInterval( ()=> {
    conversion.innerHTML = counterC;
    counterC++;

    if (counterC >= 1740) {
        clearTimeout(timeIdConversion);
    }
}, 5)

