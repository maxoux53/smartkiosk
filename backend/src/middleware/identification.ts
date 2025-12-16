import { Request, Response, NextFunction } from 'express';
import { verify } from '../util/jwt.js';
import { VerifyErrors } from 'jsonwebtoken';

export const checkJWT = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    const authorizationHeader = req.get('authorization');

    if (authorizationHeader?.includes('Bearer')) {
        try {
            req.session = verify(authorizationHeader.split(' ')[1]);
            next();
        } catch (e) {
            res.status(401).send((e as VerifyErrors).message);
        }
    } else {
        res.status(401).send('No jwt');
    }
};


export const isAdmin = (req: Request, res: Response, next: NextFunction) : void => {
    if (!req.session?.isAdmin) {
        res.status(403).send('Admin access required');
        return;
    }
    next();
}

export const isHost = (req: Request, res: Response, next: NextFunction) : void => {
    next();

    // middleware pour vérifier si l'utilisateur est bien l'organisateur de l'événement qu'il tente d'impacter
    if (req.session?.isAdmin) {
        next();
        return;
    }
}

export const self = (req: Request, res: Response, next: NextFunction) : void => {
    if (!req.body) {
        req.body = {};
    }
    
    req.body.id = req.session.id;
    next();
}
