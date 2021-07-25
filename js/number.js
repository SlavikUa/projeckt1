let counteNumber = document.querySelector('.counter-number');


let counter = 0;

let counterV = 0;


let timeIdNumber = setInterval( ()=> {

    counteNumber.innerHTML = counter;
    counter++;

    if ( counter >= 1695) {
        clearTimeout(timeIdNumber);
    }
}, 10);

let counterVisitors = document.querySelector('.counter-visitors');

let timeIdVisitors = setInterval ( ()=> {

    counterVisitors.innerHTML = counterV;
    counterV++;

    if ( counterV >= 960) {
        clearTimeout(timeIdVisitors);
    }

}, 10);


