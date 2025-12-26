import { model } from "mongoose";
import { Schema } from "mongoose";

export interface IVerification extends Document {
  identifier: string;
  value: string;
  expiresAt: Date;
}

const VerificationSchema = new Schema<IVerification>(
  {
    identifier: { type: String, index: true },
    value: { type: String, required: true },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

export default model<IVerification>('Verification', VerificationSchema);
