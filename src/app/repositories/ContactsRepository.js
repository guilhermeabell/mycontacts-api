const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Guilherme',
    email: 'guilherme@gmail.com',
    phone: '11988229419',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'João',
    email: 'joão@example.com',
    phone: '119333434419',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return Promise.resolve(contacts);
  }

  findById(id) {
    return new Promise((resolve) => {
      const foundContact = contacts.find((contact) => contact.id === id);
      resolve(foundContact);
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      const foundContact = contacts.find((contact) => contact.email === email);
      resolve(foundContact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);

      resolve(newContact);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => {
        if (contact.id === id) {
          return updatedContact;
        }

        return contact;
      });

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
