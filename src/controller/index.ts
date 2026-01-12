import "dotenv/config"; // only for development
import accountingService from "../services/AccountingServiceMap.ts";


accountingService.signUp("vasya1234", "12345.com", "USER");
accountingService.signUp("petya1234", "12345.com", "USER");
accountingService.signUp("vova1234", "12345.com", "USER");
accountingService.signUp("kolya1234", "12345.com", "ADMIN");

console.time("Sign in process");
const tokenVasya = accountingService.signIn("vasya1234", "12345.com");
console.timeEnd("Sign in process");
const tokenKolya = accountingService.signIn("kolya1234", "12345.com");
console.log("token for Vasya", tokenVasya);
console.log("token for Kolya", tokenKolya);
console.log((accountingService as any).getAccounts());
