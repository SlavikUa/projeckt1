let slaid = [
    "/img/1_d_850.jpg",
    "/img/783549.jpg",
    "/img/original-1llb.jpg",
    "/img/v880_0_55e22_7f891432_XXL.jpg",
    "/img/BSae1-0120.jpg"
];
let i = 0;

let slaidChenge = document.getElementById('slaid');


function chenge () {
    slaidChenge.setAttribute("src", slaid[i]);
    i++;
    if ( i >= slaid.length) {
        i = 0;
    }
};

setInterval (chenge, 5000);
