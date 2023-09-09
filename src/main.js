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
      console.log("Le bouton a été cliqué !");
      listModule.getListsFromAPI();
    });
  }
}
document.addEventListener('DOMContentLoaded', app.init);