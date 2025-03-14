import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose
        .connect(process.env.CONNECTION_URI)
        .then(() => console.log("DB connected successfully!"))
        .catch((error) => {
            console.log(`Failed to connect DB because: ${error.message}`);
        });
};
export default connectDB;
