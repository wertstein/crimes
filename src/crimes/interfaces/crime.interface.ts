import { Document } from 'mongoose';

export interface Crime extends Document {
  id?: string;
  title: string;
  description?: string;
}
