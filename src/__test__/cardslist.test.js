/**
 * @jest-environment jsdom
 */
const cardsListModule = require('../cardsList') ;


describe('cardsListModule', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      results: [
        {
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
        },
      ],
    }),
  }));


  test('should filter user list by gender', () => {
    const selectedGender = '1';
    const genderParam = cardsListModule.filterByGender(selectedGender);

    expect(genderParam).toBe('male');
  });

  test('should clear user cards', () => {
    const cardList = document.createElement('div');
    cardList.id = 'card-list';
    document.body.appendChild(cardList);

    for (let i = 0; i < 5; i++) {
      const card = document.createElement('div');
      cardList.appendChild(card);
    }

    cardsListModule.clearUserCards();

    const userCards = document.querySelectorAll('.user-card');
    expect(userCards.length).toBe(0);
  });

  test('should fetch user lists from API', async () => {
    const response = await cardsListModule.getListsFromAPI('male');

    expect(response.results.length).toBe(1);


    const userCards = document.querySelectorAll('.user-card');
    expect(userCards.length).toBe(1);
  });
});
