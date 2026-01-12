export default interface AccountingService {
    signIn(username: string, password: string): string;
    signUp(username: string, password: string, role: string): void;
}