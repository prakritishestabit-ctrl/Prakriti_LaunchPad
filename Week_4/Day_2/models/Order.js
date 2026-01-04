const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      required: true
    },

    amount: {
      type: Number,
      required: true,
      min: 1
    },

    status: {
      type: String,
      enum: ["PLACED", "SHIPPED", "DELIVERED"],
      default: "PLACED"
    }
  },
  { timestamps: true }
);

orderSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model("Order", orderSchema);
