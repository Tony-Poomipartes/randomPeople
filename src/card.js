const cardModule = {

  cardId: 0,
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

        const cardId = `card-${cardModule.cardId++}`;

        icon.addEventListener('mouseenter', () => {
          
          const existingDataItem = document.querySelector(`#${cardId} .data-item`);
          const existingDataText = document.querySelector(`#${cardId} .data-text`);
          
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
    cardModule.activeIcons();
    const nameIcons = document.querySelector('.icon-name');
    nameIcons.classList.add('active');
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
  userCard.id = `card-${cardModule.cardId++}`; // Affectez un ID unique à chaque carte
  return userCard;
},

//?=====================================
//?           Icons Listeners
//?=====================================
activeIcons() {
  const icons = document.querySelectorAll('.user-icon');
  icons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
      const cardId = icon.closest('.user-card').id;
      const otherIcons = document.querySelectorAll(`#${cardId} .user-icon`);
      otherIcons.forEach((otherIcon) => {
        if (otherIcon !== icon) {
          otherIcon.classList.remove('active');
        }
      });
      icon.classList.add('active');
    });
  });
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