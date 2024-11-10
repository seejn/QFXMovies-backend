import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { 
    SECRET_ACCESS_KEY,
    ACCESS_EXPIRY, 
    SECRET_REFRESH_KEY,
    REFRESH_EXPIRY
} from '../config/server.js';

import Token from "./Token.js";

const credentialsSchema = new mongoose.Schema({
    password: {
      type: String,
      required: true
    }
  });
  
const Credentials = mongoose.model("Credentials", credentialsSchema);
  
const userSchema = new Schema({
    role: {
        type: Schema.Types.ObjectId,
        ref: "Role"
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    credential: {
        type: Schema.Types.ObjectId,
        ref: "Credentials",
        unique: true,
        sparse: true // allow for having multiple nulls even though unique = true
    },
    isLoggedIn: {
        type: Boolean,
        default: false
    }
});

const deleteCredential = async (credentialId, next) => {
    try {
        console.log("from deleteCredential", credentialId);
        await Credentials.findByIdAndDelete(credentialId);
        next();
    } catch (error) {
        next(error);
    }
}

userSchema.pre("findOneAndDelete", async function (next) {
    const user = await this.model.findById(this.getQuery()._id);
    if(!user){
        throw new Error("User Not Found");
    }
    const {credential} = user;
    deleteCredential(credential, next);
});

userSchema.set("toJSON", {
    virtuals: true,
    transform: function (doc, ret, next) {
        const {credential, _id, __v, ...rest} = ret;
        return rest;
    }
})

userSchema.methods.setPassword = async function (plainPassword) {
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(plainPassword, salt); 
  
    const credentials = await Credentials.create({password: hashedPassword});
    return credentials._id;
};
userSchema.methods.updatePassword = async function (plainPassword) {
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(plainPassword, salt); 
  
    const credentials = await Credentials.findById(this.credential);
    if (credentials) {
      credentials.password = hashedPassword;
      await credentials.save(); 
    }
};
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            id: this._id,
            email: this.email,
            role: this.role.name
        },
        SECRET_ACCESS_KEY,
        {
            expiresIn: ACCESS_EXPIRY
        }
    );
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            id: this._id,
            email: this.email,
            role: this.role.name
        },
        SECRET_REFRESH_KEY,
        {
            expiresIn: REFRESH_EXPIRY
        }
    );
}

userSchema.statics.findByCredentials = async function(email, password){
    const user = await this.findOne({ email: email }).populate("credential").populate("role");
    if (!user) {
        const error = new Error("Invalid email or password");
        error.status = 404;
        throw error;
    }
    
    const token = await Token.findOne({user: user._id});
    if(token){
        const error = new Error("User already LoggedIn");
        error.status = 400;
        throw error;
    }

    const checkpassword = await bcrypt.compare(password, user.credential.password);
    if (!checkpassword) {
        const error = new Error("Invalid email or password");
        error.status = 404;
        throw error;
    }
    return user;
};
  

export default mongoose.model("User", userSchema);