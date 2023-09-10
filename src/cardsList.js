import apiModule from './api';
import cardModule from './card';

let genderParam = '';

const cardsListModule = {
/*?=====================================*/
/*?           filter By Gender
/*?=====================================*/
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
/*?=====================================*/
/*?          clear all Users Cards
/*?=====================================*/
  clearUserCards() {
    const userCardContainer = document.getElementById('card-list');
    while (userCardContainer.firstChild) {
      userCardContainer.removeChild(userCardContainer.firstChild);
    }
  },

/*?=====================================*/
/*?   Get lists of users data from API
/*?=====================================*/
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
  },
  async getImageBackground() {
    try {
      const response = await fetch(apiModule.bg_url);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const imageURL = await response.text(); 
      return imageURL;
    } catch (error) {
      console.error(`Failed to fetch background image. Status: ${error}`);
      return null;
    }
  },
};

export default cardsListModule;
