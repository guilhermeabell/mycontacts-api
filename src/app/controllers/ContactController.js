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

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um registro
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
