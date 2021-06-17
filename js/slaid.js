const imeges = document.querySelectorAll('.slaider-line img'); // получаем все картинки в данном слайдере
const sliderLine = document.querySelector('.slaider-line'); // получаем блок слайдера

let count = 0; // переменная счетчик
let width; // переменная для вычисления ширины экрана

// функция самого лайдера
function init() { 
    width = document.querySelector(".adapt-content-slaider").offsetWidth; // получаем ширину экрана
    sliderLine.style.width = width * imeges.length + 'px';
    imeges.forEach ( item => {
        item.style.width = width + "px";
        item.style.height = 'auto';
    });
    rollSlaider();
};

// ивент загрузки экрана
window.addEventListener('resize', init); // при изменение размера срабатывет функция
init();

// кнопка вперед
document.querySelector('.slaider-button-next').addEventListener('click', function() {
    count++;
    if ( count >= imeges.length) {
        count = 0;
    }
    rollSlaider();
});

// кнопка назад
document.querySelector('.slaider-button-prev').addEventListener('click', function() {
    count--;
    if ( count < 0) {
        count = imeges.length -1;
    }
    rollSlaider();
});

// плавный перескок в слайдере 
function rollSlaider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px';
}