import { VerifyErrors } from 'jsonwebtoken';
import { verify } from '../util/jwt.js';
import { Request, Response, NextFunction } from 'express';

export const checkJWT = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    const authorize = req.get('authorization');

    if (authorize?.includes('Bearer')) {
        try {
            req.session = verify(authorize.split(' ')[1]);
            next();
        } catch (e) {
            res.status(401).send((e as VerifyErrors).message);
        }
    } else {
        res.status(401).send('No jwt');
    }
};
