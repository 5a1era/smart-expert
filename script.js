'use strict';

const body = document.querySelector('body');
const smartphoneTitle = body.querySelectorAll('.smartphone-title');
const modal = document.querySelector('.mоdal');
const modalTitle = modal.querySelector('.modal-title');
const btnClose = document.querySelector('.modal-close');
let smartphonesList = ['s20ultra', 'redmiNote10pro'];

body.addEventListener('click', event => clickElement(event));

const clickElement = event => {
    switch (event.target.dataset.action) {
        case 'open-modal': {
            console.log(getTitleSmartphone(event))
            modalTitle.textContent = `Для заказа смартфона ${getTitleSmartphone(event)} заполние поля ниже`
            addClassInElement(modal, 'show');
            removeClassInElement(modal, 'hide');
        }
            break;
        case 'close-modal': {
            addClassInElement(modal, 'hide');
            removeClassInElement(modal, 'show');
        }
            break;
    }

}

const getTitleSmartphone = element => {
    console.log(element.target.alt);
    smartphonesList.forEach((item, index) => {
        if (item === element.target.alt) {
            return 'Helle';
        } else {
            return 'piii'
        }
    });
}

const addClassInElement = (element, param) => {
    element.classList.add(param);
}

const removeClassInElement = (element, param) => {
    element.classList.remove(param);
}