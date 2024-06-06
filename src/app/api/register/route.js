import { NextResponse } from "next/server";
import { connectDb } from "../../../../utils/connect";

export async function POST(req){
    try {
        await connectDb()
        const {username, email, password} = await req.json()
        console.log({username, email, password})
        return NextResponse.json({message:"User registered with succefully !"})
    } catch (error) {
        console.log("Error while you register user.",error)
    }
}