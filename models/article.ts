import mongoose, { Schema, model, models } from "mongoose";

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  md_text: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  craete_at: {
    type: Date,
    default: Date.now,
  },
  view_num: {
    type: Number,
    default: 0,
  },
});

ArticleSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ArticleSchema.set("toJSON", {
  virtuals: true,
});

const Article = models.Article || model("Article", ArticleSchema);
export const Article_ = models.Copy || model("Copy", ArticleSchema);

export default Article;
