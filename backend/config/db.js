import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        // Fix error logging to show the actual error message
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};