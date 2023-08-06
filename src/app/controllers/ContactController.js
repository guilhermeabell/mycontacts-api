class ContactController {
  index(req, res) {
    // Listar todos os registros
    res.send('Send from Contact Controller');
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
