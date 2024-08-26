import mongoose from "mongoose";


const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    CartData: {
        type: Object,
        default:{}
    }
},{minimize:false})

const UserModel = mongoose.model.User || mongoose.model('User', userschema)

export default UserModel;