
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Must provide a username"],
        unique: [true, "Must be unique"]
    },
    email:{
        type: String,
        required: [true, "Must provide a email"],
        unique: [true, "Must be unique"]
    },
    password:{
        type: String,
        required: [true, "Must provide a password"]
    },
},{timestamps:true})
