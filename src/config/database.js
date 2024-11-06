import mongoose from "mongoose";
import { MONGODB_URI } from "./server.js";

const connectDB = async () => {
    try{
        await mongoose.connect(MONGODB_URI);
        console.log("Database Connected...");
    }catch(error){
        if(error.name === "MongooseServerSelectionError"){
            console.log("Database is not running or is not accessible...");
        }
        process.exit(1);   
    }
}
export default connectDB;