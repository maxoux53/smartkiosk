import * as cookie from "cookie"

export async function connect<T>(path : string, method: string, body? : unknown): Promise<T> {
    const api_url: string = "http://localhost:3001/v1";
    const cookies = cookie.parse(document.cookie);
    const token = cookies.token;

    const options: RequestInit = {
        method: method,
        headers: {
            "Content-Type": "application/json", 
            ...(token && { "Authorization": `Bearer ${token}` })
        }
    }

    if (body) {
        options.body = JSON.stringify(body)
    }

    const res = await fetch(`${api_url}${path}`, options);
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Erreur HTTP ${res.status}: ${text || res.statusText}`);
    }
    return await res.json();
}