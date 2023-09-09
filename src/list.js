import apiModule from './api';


const listModule = {

async getListsFromAPI() {
  try {
    const response = await fetch(`${apiModule.base_url}/?results=10`);

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

createUserCard: (userData) => {
  const userCard = document.createElement('div');
  userCard.classList.add('user-card');

  const img = document.createElement('img');
  img.src = userData.picture.large;
  img.alt = 'Profile Picture';
  userCard.appendChild(img);

  const name = document.createElement('p');
  name.textContent = `Name: ${userData.name.first} ${userData.name.last}`;
  userCard.appendChild(name);

  const email = document.createElement('p');
  email.textContent = `Email: ${userData.email}`;
  userCard.appendChild(email);

  const birthday = document.createElement('p');
  birthday.textContent = `Birthday: ${userData.dob.date}`;
  userCard.appendChild(birthday);

  const address = document.createElement('p');
  address.textContent = `Address: ${userData.location.street.number} ${userData.location.street.name}`;
  userCard.appendChild(address);

  const phone = document.createElement('p');
  phone.textContent = `Phone: ${userData.phone}`;
  userCard.appendChild(phone);

  const password = document.createElement('p');
  password.textContent = `Password: ${userData.login.password}`;
  userCard.appendChild(password);

  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;'; 
  closeButton.addEventListener('click', () => {
    userCard.remove(); // Supprimez la carte lorsque la croix est cliquée
  });
  userCard.appendChild(closeButton);
  document.getElementById('userData').appendChild(userCard);
},

}

export default listModule;
