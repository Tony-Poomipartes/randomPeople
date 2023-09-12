const cardModule = {
  /*?=====================================*/
  /*?           create User Card
  /*=====================================*/
    createUserCard(userData) {
  
      const cardWrapper = document.createElement('div');
      cardWrapper.classList.add('cardWrapper');
      
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
      cardWrapper.appendChild(userCard);

      const iconContainer = document.createElement('div');
      iconContainer.classList.add('icon-container');
  
      const iconNames = ['Name', 'Email', 'Birthday', 'Address', 'Phone', 'Password'];


      const userDataKeys = {
        'Name': `${userData.name.first} ${userData.name.last}`,
        'Email': userData.email,
        'Birthday': userData.dob.date,
        'Address': `${userData.location.street.number} ${userData.location.street.name}`,
        'Phone': userData.phone,
        'Password': userData.login.password,
      };

      iconNames.forEach(iconName => {
        const icon = document.createElement('img');
        icon.src = `assets/userIcon/${iconName}.png`; 
        icon.alt = `${iconName} Icon`;
        icon.classList.add('user-icon', `icon-${iconName.toLowerCase()}`);
        iconContainer.appendChild(icon);
      });


      const img = document.createElement('img');
      img.classList.add('user-image');
      img.src = userData.picture.large;
      img.alt = 'Profile Picture';
      img.class = 'profile-picture';
      userCard.appendChild(img);
  
  
      Object.entries(userDataKeys).map(([key, value]) => {
        const dataItem = document.createElement('p');
        dataItem.textContent = `${key}: ${value}`;
        userCard.appendChild(dataItem);
      });
      
      userCard.appendChild(iconContainer);
      const closeButton = document.createElement('span');
      closeButton.classList.add('close-button');
      
      const closeButtonText = document.createTextNode('X'); 
      
      closeButton.appendChild(closeButtonText);
      closeButton.addEventListener('click', () => {
        this.removeUserCard(userCard); 
      });
      userCard.appendChild(closeButton);
  
      document.getElementById('card-list').appendChild(cardWrapper);
    },
  
  /*?=====================================*/
  /*?           Delete User Card
  /*?=====================================*/
    removeUserCard(userCard) {
      userCard.remove();
    },
  };
  
  export default cardModule;