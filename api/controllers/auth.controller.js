import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res,next) => {
    // console.log("REQ BODY ON SIGNUP", req.body);
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10); //= await bcryptjs.hash(password, 10); to remove await hash--> hashSync
    
    const newUser = new User({ username, email, password: hashedPassword});
    try {

        await newUser.save()
        res.status(201).json({ message: "user created successfully" });
    
    } catch (error) {
        // next(errorHandler(500, "this is a error message"));
        next(error);
    }

};