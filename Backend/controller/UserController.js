import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken"
import bycrypt from 'bcrypt'
import validator from 'validator'


// Login user
const loginUser = async(req,res)=>{
    const {email,password} = req.body;
        try {
            const user = await UserModel.findOne({email})

            if(!user){
                return res.status(400).json({success:false,message: "User not found"})
            }
            // comparing password
            const isMatch = await bycrypt.compare(password,user.password)
            if(!isMatch){
                return res.status(400).json({success:false,message: "Incorrect password"})
            }
            const token = createToken(user._id)
            res.json({success:true,token})

        } catch (error) {
            console.log(error)
            res.status(500).json({success:false,message: "Server Error"})
        }
}

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1h'})
}

// sign up user
const registerUser = async(req,res)=>{
    const {name,password,email} = req.body;
    try {
        // checking user already exists
        const exists = await UserModel.findOne({email});
        if(exists){
            return res.status(400).json({success:false,message: "User already exists"})
        }

        // validating email format & strong password
        if(!validator.isEmail(email)){
            return res.status(400).json({success:false,message: "Invalid email"})
        }

        if(!validator.isStrongPassword(password)){
            return res.status(400).json({success:false,message: "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"})
        }
        // hashing password
        const salt = await bycrypt.genSalt(10)
        const hashedPassword = await bycrypt.hash(password,salt)
        // creating user
        const NewUser = new UserModel({
            name:name,
            email:email,
            password:hashedPassword})
       const user = await NewUser.save();
        const token = createToken(user._id)
        res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message: "Server error"})
    }
}

export {loginUser,registerUser}