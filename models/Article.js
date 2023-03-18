import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    category: String,
  },
  { strict: false }
);

module.exports = mongoose.models.article || mongoose.model("article", articleSchema);