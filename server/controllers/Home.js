import mongoose from "mongoose";
import UserData from "../models/userSchema.js";
import "../index.js";


export const newUserData = async (req, res) => {
    const {username, password, selection} = req.body;
    if (!username || !password || !selection) {
        res.status(422).json({error: "Enter the fields properly! "})
    }
    try {
        const userExists = await UserData.findOne({username: username});
        if (userExists) {
            return res.status(422).json({error: "User already exists ! "});
        }
        const user = new UserData({username, password, selection})
        const userRegistered = await user.save();
        if (userRegistered) {
            console.log("registered")
            return res.status(201).json({message: "user registered! "});
        }
    } catch (err) {
        console.log(err);
    }
}

export const userSignIn = async (req, res) => {
    const {username,password} = req.body;
    console.log(username);
    console.log(password);
    if (!username||!password) {
        return res.status(422).json({message: "Enter the Fields !"});
    }
    try {
        const userExists = await UserData.findOne({username:username});
        if (userExists) {
            console.log(userExists)
            res.status(201).json({message: "welcome back"});
        }else {
            res.status(400).json({message: "user error"});
        }
    } catch (err) {
        console.log(err);
    }
}


