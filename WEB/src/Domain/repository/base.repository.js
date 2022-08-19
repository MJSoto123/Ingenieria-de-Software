class BaseRepository {
  constructor(model) {
    console.log("no me construte")
    this.model = model;
    this.model.getAll();
  }
  async get(id) {
    return await this.model.findById(id);
  }
  async getAll() {
    console.log("holi entreeeeee")
    return await this.model.getAll();
  }
  async create(entity) {
    return await this.model.create(entity);
  }
}

module.exports = BaseRepository;