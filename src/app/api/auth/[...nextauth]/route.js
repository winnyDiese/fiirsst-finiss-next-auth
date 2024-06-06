import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

async function login(credentials){
    try {
        
    } catch (error) {
        
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
