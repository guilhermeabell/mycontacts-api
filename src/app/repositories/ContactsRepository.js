const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Guilherme',
    email: 'guilherme@gmail.com',
    phone: '11988229419',
    category_id: uuid(),
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
