const imageOut = document.querySelector('.object-content-img'); // получаем блок в который выгрузим картинки

const ObjectName = document.querySelector('.object-name'); // получаем элементы html для вывода информации
const ObjectMade = document.querySelector('.object-made');
const ObjectPrice = document.querySelector('.object-price');
const ObjectMaterial = document.querySelector('.object-material');
const ObjectGuarantee = document.querySelector('.object-guarantee');



for ( let key in images) { // перебераем элемент images.js
    let img = document.createElement('img'); // создаем элемент с тегом img
    img.setAttribute('data-key', key); // добовляем атребут к каждому элементу
    img.src = 'img/'+key+'.jpg'; // в атребут src каждого img добовляем путь к картинке
    imageOut.append(img); // вставляет внутрь картинку
};

// вешаем событие Клик не на каждый элемент а на ихнего рабителя

imageOut.addEventListener('click', showInfo);  // добовляем ивент нажатия

function showInfo ( event ) {   // функция нажатия
    // console.dir(event.target); 

    const key = event.target.dataset['key'];  // находим у нажатого элемента параметр dataset
    console.log(key);

    if ( key === undefined) { // проверяем есле нет параметра dataset значет нажали

        return true;  // не на картинку а на пустое место ( значит завершаем функцию)
    }   
    
    ObjectName.textContent = images[key]['name'];
    ObjectMade.textContent = images[key]['made'];
    ObjectPrice.textContent = images[key]['price'];
    ObjectMaterial.textContent = images[key]['material'];
    ObjectGuarantee.textContent = images[key]['guarantee'];

    // прежде чем добавить клас active сперва нужно его убрать у всех img в блоке

    document.querySelectorAll('.object-content-img img').forEach(item => {
        item.classList.remove('active');
    });
    

    event.target.classList.add('active'); // добовляем класс к элементу
}