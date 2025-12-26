import { Schema, Types } from "mongoose";
import { model } from "mongoose";

export interface IVersion extends Document {
  code: string;
  description?: string;
  projectId: Types.ObjectId;
}

const VersionSchema = new Schema<IVersion>({
  code: { type: String, required: true },
  description: String,
  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'WebsiteProject',
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
});

export default model<IVersion>('Version', VersionSchema);
