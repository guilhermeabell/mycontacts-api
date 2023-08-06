const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Guilherme',
    email: 'guilherme@gmail.com',
    phone: '11988229419',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts); // Acessando Data Source
    });
  }
}

module.exports = new ContactsRepository();
