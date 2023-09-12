import cardsListModule from './cardsList';

const app = {
  init: function () {

    app.addListenerToActions();
    app.burgerMenu()
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
  },
  burgerMenu() {
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.querySelector('header');

    burgerMenu.addEventListener('click', () => {
      menu.classList.toggle('menu-open');
    });

    // Fermer le menu lorsque l'utilisateur clique en dehors du menu
    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !burgerMenu.contains(event.target)) {
        menu.classList.remove('menu-open');
      }
    });

    // Fermer le menu lorsque l'utilisateur fait défiler la page
    window.addEventListener('scroll', () => {
      menu.classList.remove('menu-open');
    });
  }
}
document.addEventListener('DOMContentLoaded', app.init);