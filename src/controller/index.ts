import "dotenv/config"; // only for development
import JwtUtil from "../security/JwtUtil.ts"
import { JwtPayload } from "jsonwebtoken";


const token = JwtUtil.getJwt("vasya12345", "USER");
setTimeout(() => verificationToken(token), 60000)

function verificationToken(token: string) {
    try {
        const payload: JwtPayload = JwtUtil.verifyToken(token);
        console.log(payload);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

