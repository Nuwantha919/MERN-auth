import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,     // required: true means that the field is mandatory
        unique: true,       // unique: true means that the field must be unique
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true }); // timestamps: true adds createdAt and updatedAt fields

const User = mongoose.model('User', userSchema); // Create a model from the schema

export default User;