import jwt, {JwtPayload} from "jsonwebtoken"


export default class JwtUtil {
    static getJwt(username: string, role: string): string {
        return jwt.sign(
            {role}, 
            process.env.JWT_SECRET, 
            {subject: username},
        )
    }

    static verifyToken(token: string): JwtPayload {
        return jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
    }
}