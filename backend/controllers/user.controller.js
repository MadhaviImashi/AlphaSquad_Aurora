const userService = require("../services/user.service");

const registerUser = async (req, res) => {
  try {
    const newUser = await userService.registerUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.loginUser(email, password);
    res.json(user);
  } catch (error) {
    res.status(401).json({ message: "Login failed", error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
