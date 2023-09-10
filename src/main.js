import listModule from './list';

const app = {
  init: function () {

    app.addListenerToActions();
    listModule.getListsFromAPI();
    console.log('app.init !');
  },

  addListenerToActions() {
    const addPeopleBtnElmt = document.getElementById('addPeoples');
    addPeopleBtnElmt.addEventListener("click", () => {
      const genderParam = listModule.filterByGender();
      listModule.getListsFromAPI(genderParam);
    });

    const genderRangeInput = document.getElementById('gender-range');
genderRangeInput.addEventListener('change', () => {
  const selectedGender = genderRangeInput.value;
  listModule.filterByGender(selectedGender);
  listModule.clearUserCards();
});
  }
}
document.addEventListener('DOMContentLoaded', app.init);