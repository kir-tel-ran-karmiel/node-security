import accountingService from "../services/AccountingServiceMap.ts";
import {Request, Response } from "express"


export class MyController {
    signIn = (req: Request, res: Response) => {
        const {username, password} = req.body;
        const token = accountingService.signIn(username, password);
        if (!token) return res.status(400).json({"error": "Wrong Credentials"});
        return res.status(200).json({"access_token": token});
    }

    signUp = (req: Request, res: Response) => {
        const {username, password, role} = req.body;
        try {
            accountingService.signUp(username, password, role);
            return res.status(204).send();
        }
        catch(error) {
            return res.status(409).json({"error": "Account already exists"});
        }
    }

    health = (_req: Request, res: Response) => {
        return res.status(200).json({"status": "running"});
    }

    ping = (req: Request, res: Response) => {
        const {ping, pong} = req.body;
        return res.status(200).json({"ping": [...ping].reverse().join(''), "pong": pong});
    }

    pong = (req: Request, res: Response) => {
        const {ping, pong} = req.body;
        return res.status(200).json({"ping": ping, "pong": [...pong].reverse().join('')});
    }
}