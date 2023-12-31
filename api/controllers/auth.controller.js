import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedpassword = bcryptjs.hashSync(password, 10);
  // bcrypt is used to prevent or encrpyt the password in the database
  const newUser = new User({ username, email, password: hashedpassword });

  try {
    await newUser.save();
    res.status(201).json("user created succesfully");
  } catch (error) {
    next(error);
  }
};
