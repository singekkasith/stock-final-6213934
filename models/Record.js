import mongoose from "mongoose";

const recordSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    phone: String,
  },
  { strict: false }
);

module.exports = mongoose.models.record || mongoose.model("record", recordSchema);