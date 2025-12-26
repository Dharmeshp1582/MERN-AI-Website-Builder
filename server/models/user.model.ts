import { Schema, model, Types, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  name: string;
  totalCreation: number;
  credits: number;
  emailVerified: boolean;
  projects: Types.ObjectId[];
  sessions: Types.ObjectId[];
  accounts: Types.ObjectId[];
  transactions: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    totalCreation: { type: Number, default: 0 },
    credits: { type: Number, default: 20 },
    emailVerified: { type: Boolean, default: false },

    projects: [{ type: Schema.Types.ObjectId, ref: 'WebsiteProject' }],
    sessions: [{ type: Schema.Types.ObjectId, ref: 'Session' }],
    accounts: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
    transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
  },
  { timestamps: true }
);

export default model<IUser>('User', UserSchema);
