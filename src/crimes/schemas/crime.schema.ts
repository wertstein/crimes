import * as mongoose from 'mongoose';

export const CrimeSchema = new mongoose.Schema({
  title: String,
  description: String,
});
