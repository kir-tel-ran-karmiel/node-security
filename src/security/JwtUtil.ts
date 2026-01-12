import jwt, { JwtPayload } from "jsonwebtoken"


export default class JwtUtil {
    static getJwt(username: string, role: string): string {
        const expiresIn: any = process.env.TOKEN_EXPIRED_IN || "1h";
        return jwt.sign(
            { role },
            process.env.JWT_SECRET,
            { subject: username, expiresIn },
        )
    }

    static verifyToken(token: string): JwtPayload {
        return jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
    }
}