import { verifyToken } from "../user/tools.js";

export const tookenAuth = async (req, re, next) => {
  if (!req.headers.authorization) {
    console.log(Error);
  } else {
    const token = req.headers.authorization.split(" ")[1];
    const payload = await verifyToken(token);
    if (payload) {
      req.user = {
        _id: payload._id,
        username: payload.username,
      };
      next();
    }
  }
};
