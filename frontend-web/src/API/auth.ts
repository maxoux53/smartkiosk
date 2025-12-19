import * as cookie from "cookie";
import { connect } from "./connect";
import type { getUser } from "../type";

export function token(): string | undefined {
    const cookies = cookie.parse(document.cookie);
    const token = cookies.token;

    return token
}

export function hasToken(): boolean {
    return token() !== undefined;
}

export async function checkIsAdmin(): Promise<boolean>{
    const res: getUser = await connect("/interact/me/", "GET");
    return res.is_admin;
}

export function deleteToken(): void {
    document.cookie = cookie.serialize("token", "", { maxAge: 0, path: "/" });
}