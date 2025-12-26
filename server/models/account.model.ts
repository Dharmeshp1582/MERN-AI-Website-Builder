import { model, Schema, Types } from "mongoose";

export interface IAccount extends Document {
  accountId: string;
  providerId: string;
  userId: Types.ObjectId;
  accessToken?: string;
  refreshToken?: string;
  idToken?: string;
}

const AccountSchema = new Schema<IAccount>(
  {
    accountId: { type: String, required: true },
    providerId: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },

    accessToken: String,
    refreshToken: String,
    idToken: String,
    scope: String,
    password: String,
  },
  { timestamps: true }
);

export default model<IAccount>('Account', AccountSchema);
