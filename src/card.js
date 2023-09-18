const cardModule = {

//?=====================================
//?           Create User Card
//?=====================================
  createUserCard(userData) {
  
    const cardWrapper = this.createCardWrapper();
    const userCard = this.createUserCardElement(userData);
    const closeButton = this.createCloseButton(userCard);

    cardWrapper.appendChild(userCard);

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
  

    const userDataKeys = {
      'Name': ["Hi, My name is", `${userData.name.first} ${userData.name.last}`],
      'Email': ["My email address is",userData.email],
      'Birthday': ['My birthday is',userData.dob.date],
      'Address': ['My address is',`${userData.location.street.number} ${userData.location.street.name}`],
      'Phone': ['My phone number is',userData.phone],
      'Password': ['My password is',userData.login.password],
    };

  

    const dataText = document.createElement('p');
    const dataItem = document.createElement('p');
    dataText.textContent = userDataKeys.Name[0];
    dataItem.textContent = userDataKeys.Name[1];
    dataItem.classList.add('data-item');
    dataText.classList.add('data-text');
    userCard.appendChild(dataText);
    userCard.appendChild(dataItem);
    let icon;
    Object.entries(userDataKeys).map(([key,  [prefix, value]]) => {
      icon = document.createElement('img');
        icon.src = `/assets/userIcon/${key}.png`; 
        icon.alt = `${key} Icon`;
        icon.classList.add('user-icon', `icon-${key.toLowerCase()}`);
        iconContainer.appendChild(icon);
        icon.addEventListener('mouseenter', () => {
          const existingDataItem = userCard.querySelector('.data-item');
          const existingDataText = userCard.querySelector('.data-text');
          if (existingDataItem) {
            existingDataItem.remove();
            existingDataText.remove();
          }

          const dataText = document.createElement('p');
          const dataItem = document.createElement('p');
          dataText.textContent = `${prefix}`;
          dataItem.textContent = `${value}`;
          dataItem.classList.add('data-item');
          dataText.classList.add('data-text');
          userCard.appendChild(dataText);
          userCard.appendChild(dataItem);
        });
    });

    
    userCard.appendChild(iconContainer);

    userCard.appendChild(closeButton);

    document.getElementById('card-list').appendChild(cardWrapper);
  },
  
//?=====================================
//?           Create Card Wrapper
//?=====================================
  createCardWrapper() {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('cardWrapper');
    return cardWrapper;
  },

//?=====================================
//?           Create User Card
//?=====================================
  createUserCardElement(userData) {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    const img = document.createElement('img');
    img.classList.add('user-image');
    img.src = userData.picture.large;
    img.alt = 'Profile Picture';
    userCard.appendChild(img);



    return userCard;
  },

//?=====================================
//?           Create Close Button
//?=====================================
  createCloseButton(userCard) {
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    const closeButtonText = document.createTextNode('X');
    closeButton.appendChild(closeButtonText);

    closeButton.addEventListener('click', () => {
      userCard.remove();
    });

    return closeButton;
  },
};

export default cardModule;