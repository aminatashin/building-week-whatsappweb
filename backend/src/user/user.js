import express from "express";
import userModel from "./modelUser.js";
import { generateToken } from "./tools.js";
import { tokenAuth } from "../authorization/token.js";
// ===================================
const userRouter = express.Router();
// ===================================
userRouter.post("/signup", async (req, res, next) => {
  try {
    const user = new userModel(req.body);
    const { _id } = await user.save();

    res.send({ _id });
    console.log(req.body);
  } catch (error) {
    console.log(error);

    next(error);
  }
});
// =====================================
userRouter.get("/signup", tokenAuth, async (req, res, next) => {
  const getuser = await userModel.find();
  res.send(getuser);
});
// ======================================
// userRouter.get("/signup/:userId", tokenAuth, async (req, res, next) => {
//   const getUser = await userModel.findById(req.params.userId);

//   res.send(getUser);
// });
// // ===================================

userRouter.get("/signup/me", tokenAuth, async (req, res, next) => {
  const getuser = await userModel.findById(req.user._id);
  res.send(getuser);
});

userRouter.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userModel.verifyUser(email, password);
  if (user) {
    const token = await generateToken({
      _id: user._id,
      username: user.username,
    });

    res.send({ token });
    console.log(req.body);
  } else res.status(400).send();
});

// userRouter.post("/login", async (req, res, next) => {
//   const { email, password } = req.body;
//   const user = await userModel.verifyUser(email, password);
//   if (user) {
//     res.send(user._id);
//   }
// });
// ===================================
export default userRouter;
