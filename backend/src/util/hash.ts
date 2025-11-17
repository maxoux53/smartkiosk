import * as argon2 from 'argon2';

export function hash(password: string) : Promise<string> {
    return argon2.hash(password, {secret: Buffer.from(process.env.PEPPER)});
};

export function compare(plainText: string, hash: string) : Promise<boolean> {
    return argon2.verify(
        hash,
        plainText,
        {secret: Buffer.from(process.env.PEPPER)}
    );
};
