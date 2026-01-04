const mongoose = require("mongoose");
const crypto = require("crypto");

const accountSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },

    lastName: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"]
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false
    },

    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE"
    }
  },
  { timestamps: true }
);

accountSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  this.password = crypto
    .createHash("sha256")
    .update(this.password)
    .digest("hex");

  next();
});

accountSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model("Account", accountSchema);
