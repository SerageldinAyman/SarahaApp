import { Schema, model } from "mongoose";

export const genders = {
  male: "male",
  female: "female",
};

//schema
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    password: { type: String, required: true },
    userName: {
      type: String,
      minlength: 5,
      maxlength: 15,
      /**
       * لو مش هخلي اليوزرنيم ريكويرد لازم يبقى في بديل تاني انه يبقى جينيريتيد وساعتها يبقى يونيك
       */
      unique: true,
      required: true,
    },
    isActivated: { type: Boolean, default: false },
    /**
     * phone type => string
     * عشان انا مش هعمل عليه عمليات حسابية
     * انه لما بكتب كود البلد هيببقى فيه علامة الزائد
     * اني لو كتبت الرقم اوله زيرو هيطير ومش هيتكتب فى الداتابيز
     */
    phone: {
      type: String,
      required: true /*3shan lw masaln el client 3ayez ye3ml auth bel phoneNumber*/,
    },
    gender: {
      type: String,
      /* ana hena shelt el [] 3shan object.values btrg3 array of values */
      enum: Object.values(genders),
    },
  },
  { timestamps: true }
);

//model
const User = model("User", userSchema);

export default User;
