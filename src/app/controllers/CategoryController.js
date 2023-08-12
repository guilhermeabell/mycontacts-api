const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  index(res) {
    const categories = CategoriesRepository.findAll();
    res.json(categories);
  }

  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    const category = await CategoriesRepository.create({ name });

    return res.json(category);
  }
}

module.exports = new CategoryController();
