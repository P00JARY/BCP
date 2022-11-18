import mongoose from "mongoose";

const  userSchema =new mongoose.Schema({
    username:{type: String,
        required: true,
        unique: true },
    password:String,
    selection:String
});

const UserData = mongoose.model('userData',userSchema);

export default UserData;