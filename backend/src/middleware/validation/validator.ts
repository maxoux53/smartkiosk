import { ValidationError } from '@vinejs/vine';
import * as productSchemas from './product.ts';
import { Request, Response, NextFunction } from 'express';

export const productVal = {
    get: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await productSchemas.productSearch.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await productSchemas.productCreation.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    update: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await productSchemas.productUpdate.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await productSchemas.productDeletion.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    }
};

// il faudrait essayer d'éliminer l'énorme duplication de code