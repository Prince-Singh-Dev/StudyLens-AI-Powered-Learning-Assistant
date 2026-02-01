import jwt from "jsonwebtoken";
import { fetchCollection, insertDocument, updateDocument } from "../utils/proxyClient.js";

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  });
};

// Helper to find a user by a field via proxy
const findUser = async (field, value) => {
  const users = await fetchCollection("users");
  return users.find((u) => u[field] === value);
};

// @desc Register new User
// @route POST /api/auth/register
// @access Public
export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Check if user exists
    const userExists = await findUser("email", email);
    if (userExists) {
      return res.status(400).json({
        success: false,
        error: "Email already registered",
        statusCode: 400,
      });
    }

    // Create new user via proxy
    const user = await insertDocument("users", { username, email, password });

    // Generate token
    const token = generateToken(user.id || user._id);

    res.status(201).json({
      success: true,
      data: {
        user: {
          id: user.id || user._id,
          username: user.username,
          email: user.email,
          profileImage: user.profileImage || null,
          createdAt: user.createdAt || new Date(),
        },
        token,
      },
      message: "User registered Successfully",
    });
  } catch (error) {
    next(error);
  }
};

// @desc Login user
// @route POST /api/auth/login
// @access Public
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: "Please provide email and password",
        statusCode: 400,
      });
    }

    const user = await findUser("email", email);
    if (!user || user.password !== password) {
      return res.status(401).json({
        success: false,
        error: "Invalid credentials",
        statusCode: 401,
      });
    }

    const token = generateToken(user.id || user._id);

    res.status(200).json({
      success: true,
      user: {
        id: user.id || user._id,
        username: user.username,
        email: user.email,
        profileImage: user.profileImage || null,
      },
      token,
      message: "Login Successful",
    });
  } catch (error) {
    next(error);
  }
};

// @desc Get user profile
// @route GET /api/auth/profile
// @access Private
export const getProfile = async (req, res, next) => {
  try {
    const user = await findUser("id", req.user.id || req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.status(200).json({
      success: true,
      data: {
        id: user.id || user._id,
        username: user.username,
        email: user.email,
        profileImage: user.profileImage || null,
        createdAt: user.createdAt || new Date(),
        updatedAt: user.updatedAt || new Date(),
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc Update user profile
// @route PUT /api/auth/profile
// @access Private
export const updateProfile = async (req, res, next) => {
  try {
    const { username, email, profileImage } = req.body;

    const user = await findUser("id", req.user.id || req.user._id);
    if (!user) return res.status(404).json({ success: false, error: "User not found" });

    const updatedUser = await updateDocument(
      "users",
      user.id || user._id,
      { username, email, profileImage }
    );

    res.status(200).json({
      success: true,
      data: {
        id: updatedUser.id || updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        profileImage: updatedUser.profileImage || null,
      },
      message: "Profile Updated Successfully",
    });
  } catch (error) {
    next(error);
  }
};

// @desc Change password
// @route POST /api/auth/change-password
// @access Private
export const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        error: "Please provide current and new password",
        statusCode: 400,
      });
    }

    const user = await findUser("id", req.user.id || req.user._id);
    if (!user) return res.status(404).json({ success: false, error: "User not found" });

    if (user.password !== currentPassword) {
      return res.status(401).json({
        success: false,
        error: "Current Password is incorrect",
        statusCode: 401,
      });
    }

    const updatedUser = await updateDocument("users", user.id || user._id, {
      password: newPassword,
    });

    res.status(200).json({
      success: true,
      message: "Password Changed Successfully",
    });
  } catch (error) {
    next(error);
  }
};
