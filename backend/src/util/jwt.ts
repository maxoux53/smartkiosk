import 'dotenv/config';
import jsonwebtoken, { JwtPayload, SignOptions, VerifyOptions } from 'jsonwebtoken';

export function sign(payload: JwtPayload, options: SignOptions) : string {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET!, options);
};

export function verify(jwt: string) : JwtPayload | string {
    return jsonwebtoken.verify(jwt, process.env.JWT_SECRET!);
};
