import express from "express";
import userModel from "./modelUser.js";
import { generateToken } from "./tools.js";
import { tookenAuth } from "../authorization/tooken.js";
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
userRouter.get("/signup", tookenAuth, async (req, res, next) => {
  const getuser = await userModel.find();
  res.send(getuser);
});
// ======================================
userRouter.get("/signup/:id", async (req, res, next) => {
  const getTodo = await userModel.findById(req.params.todoId);
  res.send(getTodo);
});
// ===================================
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
// ===================================
export default userRouter;
