const { v4 } = require('uuid');

const db = require('../../database');

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

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`INSERT INTO contacts(name, email, phone, category_id)
    VALUES($1, $2, $3, $4)
    RETURNING *
    `, [name, email, phone, category_id]);

    return row;
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
