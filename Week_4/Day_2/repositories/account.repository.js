const Account = require("../models/Account");

class AccountRepository {
  async create(data) {
    return Account.create(data);
  }

  async findById(id) {
    return Account.findById(id);
  }

  async findPaginated({ limit = 10, lastId }) {
    const query = lastId ? { _id: { $lt: lastId } } : {};
    return Account.find(query).limit(limit);
  }

  async update(id, data) {
    return Account.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return Account.findByIdAndDelete(id);
  }
}

module.exports = new AccountRepository();
