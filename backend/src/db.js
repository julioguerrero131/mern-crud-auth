import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/mern-crud-auth-db")
        console.log(">>>> DB is connected");
    } catch (error) {
        console.log(error);
    }
}