const Order = require("../models/Order");

class OrderRepository {
  async create(data) {
    return Order.create(data);
  }

  async findById(id) {
    return Order.findById(id);
  }

  async findPaginated({ status, limit = 10, lastDate }) {
    const query = {
      status,
      ...(lastDate && { createdAt: { $lt: lastDate } })
    };

    return Order.find(query)
      .sort({ createdAt: -1 })
      .limit(limit);
  }

  async delete(id) {
    return Order.findByIdAndDelete(id);
  }
}

module.exports = new OrderRepository();
