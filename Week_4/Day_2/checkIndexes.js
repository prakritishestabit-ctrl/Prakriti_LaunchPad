const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 1
  },
  status: {
    type: String,
    enum: ['PLACED', 'SHIPPED', 'DELIVERED'],
    default: 'PLACED'
  }
}, { timestamps: true });

orderSchema.index({ status: 1, createdAt: -1 });

const Order = mongoose.model('Order', orderSchema);

async function run() {
  await mongoose.connect('mongodb://localhost:27017/day2_assignment');

  const count = await Order.countDocuments();
  if (count === 0) {
    await Order.create([
      { accountId: new mongoose.Types.ObjectId(), amount: 100, status: 'PLACED' },
      { accountId: new mongoose.Types.ObjectId(), amount: 50, status: 'SHIPPED' },
      { accountId: new mongoose.Types.ObjectId(), amount: 200, status: 'DELIVERED' }
    ]);
    console.log('Inserted sample orders');
  }

  await Order.syncIndexes();

  const indexes = await Order.collection.getIndexes();
  console.log('Indexes in orders collection:', indexes);

  await mongoose.disconnect();
}

run();


