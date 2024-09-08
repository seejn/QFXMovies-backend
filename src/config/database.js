import mongoose from "mongoose";

const connectDB = async () => {
    try{
        console.log(process.env.MONGODB_URI)
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected...");
    }catch(error){
        console.log("Error connecting to database", error);
        process.exit(1);   
    }
}
export default connectDB;