'use strict';

const body = document.querySelector('body');
const smartphoneTitles = body.querySelectorAll('.smartphone-title');
const modal = document.querySelector('.mоdal');
const modalTitle = modal.querySelector('.modal-title');
const btnClose = document.querySelector('.modal-close');
let smartphonesList = ['s20ultra', 'redmiNote10pro'];

body.addEventListener('click', event => clickElement(event));

const clickElement = event => {
    switch (event.target.dataset.action) {
        case 'open-modal': {
           getTitleSmartphone(event);
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

};

const getTitleSmartphone = element => {
    smartphonesList.forEach((item, index) => {
        if (item === element.target.alt) {
            modalTitle.textContent = `Для заказа смартфона ${smartphoneTitles[index].textContent} заполние поля ниже`;

        } 
    });
};

const addClassInElement = (element, param) => {
    element.classList.add(param);
};

const removeClassInElement = (element, param) => {
    element.classList.remove(param);
};

console.log(getTitleSmartphone(modal));