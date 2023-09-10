import cardsListModule from './cardsList';

const app = {
  init: function () {

    app.addListenerToActions();
    cardsListModule.getListsFromAPI();
    sessionStorage.removeItem('genderParam');
    console.log('app.init !');
  },

  addListenerToActions() {
    const addPeopleBtnElmt = document.getElementById('addPeoples');
    addPeopleBtnElmt.addEventListener("click", () => {
      const genderParam = sessionStorage.getItem('genderParam');
      cardsListModule.getListsFromAPI(genderParam);
    });

    
    const genderButtons = document.querySelectorAll('.gender-button');
    genderButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const selectedGender = button.value;
        sessionStorage.setItem('genderParam', selectedGender);
        genderButtons.forEach((btn) => btn.classList.remove('selected'));
        button.classList.add('selected');
        cardsListModule.filterByGender(selectedGender);
        cardsListModule.clearUserCards();
      });
    });
  }
}
document.addEventListener('DOMContentLoaded', app.init);