import mongoose, { Model, Schema } from 'mongoose'

export const TestSchema = new Schema({
  name: String,
})

export const Test: Model<any> = mongoose.model('Test', TestSchema)