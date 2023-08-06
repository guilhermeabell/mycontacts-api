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
    return contacts;
  }
}

module.exports = new ContactsRepository();
