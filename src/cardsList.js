const apiModule = require('./api') ;
const cardModule = require('./card') ;

let genderParam = '';

const cardsListModule = {
//?=====================================
//?           Filter By Gender
//?=====================================
  filterByGender(selectedGender) {
    

    if (selectedGender === '1') {
      genderParam = 'male'; 
    } else if (selectedGender === '2') {
      genderParam = 'female'; 
    }
    else {
    genderParam = '';  
  }
  sessionStorage.setItem('genderParam', genderParam);
    this.getListsFromAPI(genderParam);
    return genderParam;
  },

//?=====================================
//?           Clear User Cards
//?=====================================
  clearUserCards() {
    const userCardContainer = document.getElementById('card-list');
    while (userCardContainer.firstChild) {
      userCardContainer.removeChild(userCardContainer.firstChild);
    }
  },

//?=====================================
//?           Get Lists From API
//?=====================================
  async getListsFromAPI(genderParam) {

    try {
      let apiUrl = `${apiModule.base_url}/?results=10`;
      if (genderParam) {
        apiUrl +=  `&gender=${genderParam}`;
      }
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(response.status);
      }

      const listsArray = await response.json();
      listsArray.results.forEach((userData) => {
        cardModule.createUserCard(userData);
      });

      return listsArray;
    } catch (error) {
      alert(`Failed to fetch lists from the API. Status: ${error}`);
    }
  }
};

module.exports = cardsListModule;
