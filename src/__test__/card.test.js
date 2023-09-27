/**
 * @jest-environment jsdom
 */
const cardModule = require('../card');


const userData = {
  name: {
    first: 'John',
    last: 'Doe',
  },
  email: 'john@example.com',
  dob: {
    date: '1990-01-01',
  },
  location: {
    street: {
      number: 123,
      name: 'Main St',
    },
  },
  phone: '555-1234',
  login: {
    password: 'password123',
  },
  picture: {
    large: 'profile.jpg',
  },
};


describe('cardModule', () => {

  test('should create a user card', () => {

    const cardList = document.createElement('div');
    cardList.id = 'card-list';
    document.body.appendChild(cardList);


    cardModule.createUserCard(userData);

    const userCards = document.querySelectorAll('.user-card');
    expect(userCards.length).toBe(1);
  });

});