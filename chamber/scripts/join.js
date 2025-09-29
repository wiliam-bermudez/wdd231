const modal = document.getElementById('modal-NP');
const modalbronze = document.getElementById('modal-bronze');
const modalsilver = document.getElementById('modal-silver');
const modalgold = document.getElementById('modal-gold');


const closeModalNP = document.querySelector('#closeModalNp');
const closeModalbronze = document.querySelector('#closeModalbronze');
const closeModalsilver = document.querySelector('#closeModalsilver');
const closeModalgold = document.querySelector('#closeModalgold');

    
const moreInfo = document.getElementById('npModal');
const moreInfobronze = document.getElementById('Modalbronze');
const moreInfosilver = document.getElementById('Modalsilver');
const moreInfogold = document.getElementById('Modalgold');

/*OPEN THE MODALS*/
moreInfo.addEventListener('click', () => {
    modal.showModal();
})

moreInfobronze.addEventListener('click', () => {
    modalbronze.showModal();
})

moreInfosilver.addEventListener('click', () => {
    modalsilver.showModal();
})

moreInfogold.addEventListener('click', () => {
    modalgold.showModal();
})

/*CLOSE THE MODALS*/


closeModalNP.addEventListener('click', () => {
  modal.close();
});

closeModalbronze.addEventListener('click', () => {
  modalbronze.close();
});

closeModalsilver.addEventListener('click', () => {
  modalsilver.close();
});

closeModalgold.addEventListener('click', () => {
  modalgold.close();
});




/* THANK YOU PAGE*/ 
