import { model, Schema, Types } from "mongoose";

export enum Role {
  USER = 'user',
  ASSISTANT = 'assistant',
}

export interface IConversation extends Document {
  role: Role;
  content: string;
  projectId: Types.ObjectId;
}

const ConversationSchema = new Schema<IConversation>({
  role: { type: String, enum: Object.values(Role), required: true },
  content: { type: String, required: true },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'WebsiteProject',
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
});

export default model<IConversation>('Conversation', ConversationSchema);
