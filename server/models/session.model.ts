import { model, Schema, Types } from "mongoose";

export interface ISession extends Document {
  token: string;
  expiresAt: Date;
  ipAddress?: string;
  userAgent?: string;
  userId: Types.ObjectId;
}

const SessionSchema = new Schema<ISession>(
  {
    token: { type: String, unique: true, required: true },
    expiresAt: { type: Date, required: true },
    ipAddress: String,
    userAgent: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export default model<ISession>('Session', SessionSchema);
