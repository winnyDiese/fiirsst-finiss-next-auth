
import mongoose from "mongoose"

export async function connectDb(){
    try {
        await mongoose.connect()
    } catch (error) {
        
    }
} 