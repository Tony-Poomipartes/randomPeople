import apiModule from './api';


const cardModule = {
/*?=====================================*/
/*?           create User Card
/*?=====================================*/
  createUserCard(userData) {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');

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

/*?=====================================*/
/*?           Delete User Card
/*?=====================================*/
  removeUserCard(userCard) {
    userCard.remove();
  },
};

export default cardModule;