import { model, Schema, Types } from "mongoose";

const messageSchema = new Schema(
  {
    body: { type: String, required: true },
    sender: {
      type: Types.ObjectId,
      ref: "User" /* اسم الmodel في ال ref*/,
      required: true, //malhash 3elaka eno anonymous wla la2
    },
    receiver: { type: Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Message = model("Message", messageSchema);

export default Message;
