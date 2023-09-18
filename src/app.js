import cardsListModule from './cardsList';

const app = {
  init: function () {

    app.addListenerToActions();
    app.burgerMenu()
    cardsListModule.getListsFromAPI();
    sessionStorage.removeItem('genderParam');
    console.log('app.init !');
  },

//?=====================================
//?           Add Listeners
//?=====================================
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

  //?=====================================
  //?           Burger Menu
  //?=====================================
  burgerMenu() {
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.querySelector('header');
  
    const toggleMenu = () => {
      menu.classList.toggle('menu-open');
    };
  
    const closeMenu = () => {
      menu.classList.remove('menu-open');
    };
  
    burgerMenu.addEventListener('click', toggleMenu);
  
    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !burgerMenu.contains(event.target)) {
        closeMenu();
      }
    });
  
    window.addEventListener('scroll', closeMenu);
  
    window.addEventListener('resize', () => {
      if (window.innerWidth > 700) {
        closeMenu();
      }
    });
  }
}
document.addEventListener('DOMContentLoaded', app.init);