const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  index(req, res) {
    // Listar todos os registros
    const contacts = ContactsRepository.findAll();

    res.json(contacts);
  }

  show() {
    // Obter um registro

  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
