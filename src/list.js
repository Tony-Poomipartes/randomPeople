import apiModule from './api';

let genderParam = '';

const listModule = {

  filterByGender(selectedGender) {
    

    if (selectedGender === '1') {
      genderParam = 'male'; 
    } else if (selectedGender === '2') {
      genderParam = 'female'; 
    }
    else {
    genderParam = ''; 
  }

console.log(genderParam);
    this.getListsFromAPI(genderParam);
    return genderParam;
  },

  clearUserCards() {
    const userCardContainer = document.getElementById('card-list');
    while (userCardContainer.firstChild) {
      userCardContainer.removeChild(userCardContainer.firstChild);
    }
  },

  async getListsFromAPI(genderParam) {

    try {
      console.log(genderParam);
      // const response = await fetch(`${apiModule.base_url}/?results=10`);
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
        listModule.createUserCard(userData);
      });

      return listsArray;
    } catch (error) {
      alert(`Failed to fetch lists from the API. Status: ${error}`);
    }
  },

  createUserCard(userData) {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');

    // Créez un objet avec les données utilisateur pour éviter la répétition
    const userDataKeys = {
      'Name': `${userData.name.first} ${userData.name.last}`,
      'Email': userData.email,
      'Birthday': userData.dob.date,
      'Address': `${userData.location.street.number} ${userData.location.street.name}`,
      'Phone': userData.phone,
      'Password': userData.login.password,
    };

    const img = document.createElement('img');
    img.src = userData.picture.large;
    img.alt = 'Profile Picture';
    img.class = 'profile-picture';
    userCard.appendChild(img);


    Object.entries(userDataKeys).map(([key, value]) => {
      const dataItem = document.createElement('p');
      dataItem.textContent = `${key}: ${value}`;
      userCard.appendChild(dataItem);
    });
    

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    
    const closeButtonText = document.createTextNode('X'); 
    
    closeButton.appendChild(closeButtonText);
    closeButton.addEventListener('click', () => {
      this.removeUserCard(userCard); 
    });
    userCard.appendChild(closeButton);

    document.getElementById('card-list').appendChild(userCard);
  },

  // Méthode pour supprimer une carte utilisateur
  removeUserCard(userCard) {
    userCard.remove();
  },


};

export default listModule;
