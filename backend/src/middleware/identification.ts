import { Request, Response, NextFunction } from 'express';
import { verify } from '../util/jwt.js';
import { VerifyErrors } from 'jsonwebtoken';
import prisma from "../database/databaseORM.ts";

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


export const isAdmin = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    if (!req.session?.isAdmin) {
        res.status(403).send('Admin access required');
        return;
    }
    next();
}

export const isHost = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    if (req.session?.isAdmin) {
        next();
        return;
    }

    const { event_id } = req.body;
    try {
        const membership = await prisma.membership.findFirst({
            where: {
                user_id: req.session.id,
                event_id: event_id,
                role: 'host'
            }
        })
        if (!membership) {
            res.status(403).send('Host access required');
            return;
        }
        next();

    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const isCashier = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    if (req.session?.isAdmin) {
        next();
        return;
    }
    
    const { event_id } = req.body;
    try {
        const membership = await prisma.membership.findFirst({
            where: {
                user_id: req.session.id,
                event_id: event_id,
                role: {
                    in: ['host', 'cashier']
                }
            }
        })
        if (!membership) {
            res.status(403).send('Host or cashier access required');
            return;
        }
        next();

    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const self = (req: Request, res: Response, next: NextFunction) : void => {
    if (!req.body) {
        req.body = {};
    }
    
    req.body.id = req.session.id;
    next();
}
