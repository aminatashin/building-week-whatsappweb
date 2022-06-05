import mongoose from "mongoose";
import bcrypt from "bcrypt";
// ===============================
const { Schema, model } = mongoose;
const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// ===================HASH=====================
userSchema.pre("save", async function (next) {
  const user = this;
  const plainPW = this.password;
  const hash = await bcrypt.hash(plainPW, 11);
  user.password = hash;
  next();
});
// =====================DELETE PASS=====================
userSchema.methods.toJSON = function () {
  const userDocument = this;
  const userObject = userDocument.toObject();

  delete userObject.password;
  delete userObject.__v;

  return userObject;
};
// =================COSTUM VARIFICATION=======================
userSchema.static("verifyUser", async function (email, plainPW) {
  const user = await this.findOne({ email });
  if (user) {
    const isMatch = await bcrypt.compare(plainPW, user.password);
    if (isMatch) {
      return user;
    } else {
      return null;
    }
  } else {
    return null;
  }
});
// ========================================
export default model("user", userSchema);
