import cardsListModule from './cardsList';

const app = {
  init: function () {

    app.addListenerToActions();
    cardsListModule.getListsFromAPI();
    sessionStorage.clear();
    console.log('app.init !');
  },

  addListenerToActions() {
    const addPeopleBtnElmt = document.getElementById('addPeoples');
    addPeopleBtnElmt.addEventListener("click", () => {
      let genderParam = sessionStorage.getItem('genderParam');
      cardsListModule.getListsFromAPI(genderParam);
    });

    const genderRangeInput = document.getElementById('gender-range');
genderRangeInput.addEventListener('change', () => {
  const selectedGender = genderRangeInput.value;
  cardsListModule.filterByGender(selectedGender);
  cardsListModule.clearUserCards();
});
  }
}
document.addEventListener('DOMContentLoaded', app.init);