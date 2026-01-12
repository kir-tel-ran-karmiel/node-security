import { NextFunction, Request, Response } from "express"
import JwtUtil from "../../security/JwtUtil";


const BEARER = "Bearer";
const AUTHORIZATION = "Authorization";

export function authenticate(
    req: Request & { user: string, role: string },
    res: Response,
    next: NextFunction
) {
    const authHeader = req.header(AUTHORIZATION);
    if (authHeader.startsWith(BEARER)) {
        const token = authHeader.substring(BEARER.length);
        try {
            const payload = JwtUtil.verifyToken(token);
            req.user = payload.sub;
            req.role = payload.role;
        } catch (error) {
            return res.status(401).json(error.name.includes("xpir?") ?
                { "error": "Expiraton" } : { "error": "Corruted token" })
        }
    }
    next();
}

export function authorization(roles: string[]) {

}