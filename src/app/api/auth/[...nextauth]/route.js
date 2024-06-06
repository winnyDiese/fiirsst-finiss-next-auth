
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
                    console.log({credentials})
                } catch (error) {
                    console.log("Error = ",error)
                    return null
                }
            }
        })
    ]
}
