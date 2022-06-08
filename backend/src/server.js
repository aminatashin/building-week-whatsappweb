import express from "express";
import cors from "cors";
import ListEndpoints from "express-list-endpoints";
import mongoose from "mongoose";
import userRouter from "./user/user.js";

// =================================================
const server = express();
const port = process.env.PORT || 3004;
// =================================================
server.use(express.json());
server.use(cors());

server.use("/user", userRouter);
// ==================================================
mongoose.connect(process.env.MONGO_CONNECTION);
mongoose.connection.on("connected", () => {
  console.log("Mongo is Connected");
  server.listen(port, () => {
    console.table(ListEndpoints(server));
    console.log(`server is running on port ${port}`);
  });
});
