import "dotenv/config"; // only for development
import JwtUtil from "../security/JwtUtil.ts"
import { JwtPayload } from "jsonwebtoken";


const token = JwtUtil.getJwt("vasya12345", "USER");
console.log(token);


const payload: JwtPayload = JwtUtil.verifyToken(token);
console.log(payload);