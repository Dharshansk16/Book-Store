import User from "../models/user.js";
import bcryptjs from "bcryptjs";

export const Register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "username already exists" });
    }
    const hashedPasswrod = await bcryptjs.hash(password, 10);
    const createUser = new User({
      username,
      password: hashedPasswrod,
    });
    await createUser.save();
    return res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Failed to Register", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPassword = await bcryptjs.compare(password, user.password);
    if (!user || !isPassword) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    return res.status(200).json({
      message: "Login successfull",
      user: {
        username: user.username,
        id: user.id,
      },
    });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ message: "Internal server Error" });
  }
};
