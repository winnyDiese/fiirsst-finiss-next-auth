
export {default} from "next-auth/middleware"

export const config = {
    matcher: ["/","/add","/profile","/update/:path*"]
}
