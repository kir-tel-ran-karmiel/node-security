import JwtUtil from "../security/JwtUtil.ts";
import AccountingService from "./AccountingService.ts";
import { compareSync, hashSync } from "bcrypt-ts";


export class Account {
    constructor(
        public username: string,
        public password: string,
        public role: string,
    ) { }
}


class AccountingServiceMap implements AccountingService {
    private accounts: Map<string, Account> = new Map();

    signIn(username: string, password: string): string | undefined {
        let token: string | undefined = undefined;
        const account: Account | undefined = this.accounts.get(username);
        if (account) {
            if (compareSync(password, account.password)) {
                token = JwtUtil.getJwt(username, account.role);
            }
        }
        return token;
    }

    signUp(username: string, password: string, role: string): void {
        if (this.accounts.has(username)) {
            throw Error(`Account ${username} already exists`);
        }
        const hashPassword = hashSync(password, parseInt(process.env.SALT || "10"));
        const account: Account = new Account(username, hashPassword, role);
        this.accounts.set(username, account);
    }
    // FIXME code only for testing
    getAccounts(): Map<string, Account> {
        return this.accounts;
    }
}

const accountingService: AccountingService = new AccountingServiceMap();
export default accountingService;