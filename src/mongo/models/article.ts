import mongoose, { Schema, Model } from 'mongoose'

const ArticleSchema = new Schema({
  title: String,
  content: String,
  create_time: Date,
  update_time: Date,
  isPublic: Boolean,
  tags: [String],
  categories: [String],
})

export const Article: Model<any> = mongoose.model('Article', ArticleSchema)