import jsonwebtoken, { JwtPayload, SignOptions, VerifyOptions } from 'jsonwebtoken';

export function sign(payload: JwtPayload, options: SignOptions) {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, options);
};

export function verify(jwt: string, options: VerifyOptions) {
    return jsonwebtoken.verify(jwt, process.env.JWT_SECRET, options);
};
