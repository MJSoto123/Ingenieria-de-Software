class BaseService {
  constructor(Repository) {
    this.repository = Repository;
  }
  async get(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "Parametro id debe ser enviado"
      throw error;
    }

    const entity = await this.repository.get(id);
    if (!entity) {
      const error = new Error();
      error.status = 400;
      error.message = "Entidad no encontrada"
      throw error;
    }
    return entity
  }

  async getAll() {
    const entity = await this.repository.getAll();
    if (!entity) {
      const error = new Error();
      error.status = 400;
      error.message = "Entidad no encontrada"
      throw error;
    }
    return entity
  }
}

module.exports = BaseService