const BaseRepository = require("./base.repository");

class PersonRepository extends BaseRepository {
  constructor(PersonDb) {
    super(PersonDb);
  }
  async getAllWithoutPagination() {
    return await this.model.find();
  }
}

module.exports = PersonRepository
