import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectDb } from "../../../../../utils/connect"
import User from "../../../../../models/userModel"

async function login(credentials){
    try {
        connectDb()
        const user = await User.findOne({email:credentials.email})
        if(!user) throw new Error("Wrong Credentials")

        const isCorrect = await bcrypt.compare(credentials.password, user.password)
        if(!isCorrect) throw new Error("Wrong Credentials")
        return user
    } catch (error) {
        console.log("Error while logging in")
        throw new Error('Something went')
    }
}

export const authOptions = {
    pages:{
        signIn:"/login"
    },
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{},
            async authorize(credentials){
                try {
                    const user = await login(credentials)
                    console.log("This is the user ",user)
                } catch (error) {
                    console.log("Error = ",error)
                    return null
                }
            }
        })
    ]
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}
