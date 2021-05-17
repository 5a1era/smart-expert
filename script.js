'use strict';

const row = document.querySelector('.row');
const modal = document.querySelector('.mоdal');
const btnClose = document.querySelector('.modal-close');
row.addEventListener('click', event => {
    console.log(modal);
    modal.classList.add('show');
    modal.classList.remove('hide');

});

btnClose.addEventListener('click', () => {
    modal.classList.remove('show');
    modal.classList.add('hide');
})