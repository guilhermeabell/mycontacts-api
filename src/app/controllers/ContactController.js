/* eslint-disable consistent-return */
const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(req, res) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();

    res.json(contacts);
  }

  async show(req, res) {
    // Obter um registro
    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(contact);
    }

    res.json(req.params);
  }

  async store(req, res) {
    // Criar novo registro
    const {
      name, email, phone, category_id,
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const contactsExists = await ContactsRepository.findByEmail(email);

    if (contactsExists) {
      return res.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    res.json(contact);
  }

  async update(req, res) {
    // Editar um registro
    const { id } = req.params;
    const {
      name,
      email,
      phone,
      category_id,
    } = req.body;

    const contactExists = await ContactsRepository.findById(id);

    if (!contactExists) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return res.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    res.json(contact);
  }

  async delete(req, res) {
    // Deletar um registro
    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not found
      res.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);
    // 204: No Content
    res.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
