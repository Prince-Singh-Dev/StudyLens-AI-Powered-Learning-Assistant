import jwt from 'jsonwebtoken';
import User from "../models/User.js";

// Generating JWT token
const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn : process.env.JWT_EXPIRE || "7d",
    });
};

// @desc Register new User
// @route POST /api/auth/register
// @access Public
export const register = async (req,res,next) => {
    try {
        const {username,email,password} = req.body;
        //checking for the user
        const userExists = await User.findOne({ $or : [{email}]});
        if(userExists){
            return res.status(400).json({
                success:false,
                error:
                    userExists.email === email
                    ? "Email already registered"
                    : "Username already taken",
                statusCode:400,
            });
        }
        // Creating the user 
        const user = await User.create({
            username,
            email,
            password,
        });
        // Generating token
        const token = generateToken(user._id);
        res.status(201).json({
            success:true,
            data:{
                user:{
                    id:user._id,
                    username:user.username,
                    email:user.email,
                    profileImage:user.profileImage,
                    createdAt:user.createdAt,
                },
                token,
            },
            message:"User registered Successfully",
        });
    } catch (error) {
        next(error);
    }
};

// @desc Login user
// @route POST /api/auth/login
// @access Public
export const login = async (req,res,next) => {
    try {
        const {email,password} = req.body;

        //Validating the users given inputs
        if(!email || !password){
            return res.status(400).json({
                success:false,
                error:"Please Provide email and password",
                statusCode:400,
            });
        }

        // checking for th euser and comparing the password entered by the user
        const user = await User.findOne({email}).select("+password");
        if(!user){
            return res.status(401).json({
                success:false,
                error:"Invalid credentials",
                statusCode:401,
            });
        }

        //Checking for the password
        const isMatch = await user.matchPassword(password);

        if(!isMatch){
            return res.status(401).json({
                success:false,
                error:"Invalid Credentials",
                statusCode:401,
            });
        }

        // Generating the token
        const token = generateToken(user._id);

        res.status(200).json({
            success:true,
            user:{
                id:user._id,
                username:user.username,
                email:user.email,
                profileImage:user.profileImage,
            },
            token,
            message:"Login Successful"
        });
    } catch (error) {
        next(error);
    }
};

// @desc Get user Profile
// @route GET /api/auth/profile
// @access Private
export const getProfile = async (req,res,next) => {
    try {
    } catch (error) {
        next(error);
    }
};

// @desc Update user profile
// @route PUT /api/auth/profile
// @access Private
export const updateProfile = async (req,res,next) => {
    try {
    } catch (error) {
        next(error);
    }
};

// @desc Change user password
// @route POST /api/auth/change-password
// @access Private
export const changePassword = async (req,res,next) => {
    try {
    } catch (error) {
        next(error);
    }
};