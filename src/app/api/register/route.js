import { NextResponse } from "next/server";
import { connectDb } from "../../../../utils/connect";
import bcrypt from "bcrypt"
import User from "../../../../models/userModel";

export async function POST(req){
    try {
        await connectDb()
        
        const {username, email, password} = await req.json()
        console.log({username, email, password})
        const exists = await User.findOne({$or:[{email},{username}]})

        if(exists){
            return NextResponse.json({message:"Username or email already exist !"})
            {status:500}
        }
        
        const hashedPassword = await bcrypt.hash(password,10)
        await User.create({username,email,password:hashedPassword})
        return NextResponse.json({message:"User registered  !"},{status:201})

    } catch (error) {
        console.log("Error while you register user.",error)
        return NextResponse.json({message:"Error occured while registering the user !"},{status:500})

    }
}