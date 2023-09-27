import cardsListModule from './cardsList';

const app = {
  init: function () {

    app.buttonListenerToActions();
    app.burgerMenu()
    cardsListModule.getListsFromAPI();
    console.log('app.init !');
  },

//?=====================================
//?           Add button Listeners
//?=====================================
buttonListenerToActions() {
  const addPeopleBtnElmt = document.getElementById('addPeoples');
  addPeopleBtnElmt.addEventListener("click", () => {
    const genderParam = sessionStorage.getItem('genderParam');
    cardsListModule.getListsFromAPI(genderParam);
  });

  const genderButtons = document.querySelectorAll('.gender-button');
  for (const button of genderButtons) {
    button.addEventListener('click', () => {
      if (button.classList.contains('selected')) {
        return;
      }

      const selectedGender = button.value;
      sessionStorage.setItem('genderParam', selectedGender);
      
      for (const btn of genderButtons) {
        btn.classList.remove('selected');
      }

      button.classList.add('selected');
      cardsListModule.filterByGender(selectedGender);
      cardsListModule.clearUserCards();
    });
  }
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