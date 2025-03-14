import { model, Schema, Types } from "mongoose";

const messageSchema = new Schema(
  {
    body: { type: String, required: true },
    sender: { type: Types.ObjectId, ref: "User" },
    receiver: { type: Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Message = model("Message", messageSchema);

export default Message;
