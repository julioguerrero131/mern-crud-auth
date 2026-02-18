import User from '../models/user.model.js';

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ 
      username, 
      email, 
      password 
    });
    const savedUser = await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error registering user" });
  }
};

export const login = (req, res) => {
  res.send("Login endpoint");
};