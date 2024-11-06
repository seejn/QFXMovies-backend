import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs";

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
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    credential: {
        type: Schema.Types.ObjectId,
        ref: "Credentials"
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

userSchema.statics.findByCredentials = async (email, password) => {
    try {
        const user = await userModel.findOne({ email: email }).populate("credential").populate(role);
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const checkpassword = await bcrypt.compare(password, user.credential.password);
        if (!checkpassword) {
            throw new Error("Invalid email or password");
        }
        const { credential, ...rest} = user;
        return rest;
    } catch (error) {
        console.error("Login error:", error.message);
        throw new Error("Authentication failed");
    }
};
  

export default mongoose.model("User", userSchema);