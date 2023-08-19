const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");

const registerUser = async (userData) => {
  const { fullName, currentResidency, email, password } = userData;

  // Check if user already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new userModel({
    fullName,
    currentResidency,
    email,
    password: hashedPassword,
  });

  let user = await newUser.save();
  user = { ...user.toObject() };
  delete user.password;
  return { message: "Login successful", user };
};

const loginUser = async (email, password) => {
  let user = await userModel.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }
  user = { ...user.toObject() };
  delete user.password;
  return { message: "Login successful", user };
};

module.exports = {
  registerUser,
  loginUser,
};
