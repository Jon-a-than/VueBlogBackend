import mongoose, { Schema, Model } from 'mongoose'

const UserSchema = new Schema({
  login: String,
  github_id: Number,
  gitee_id: Number,
  avatar_url: String,
  token: String,
})

export const User: Model<any> = mongoose.model('User', UserSchema)

