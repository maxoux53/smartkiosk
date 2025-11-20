import { ValidationError } from '@vinejs/vine';
import { Request, Response, NextFunction } from 'express';
import * as categorySchemas from './category.ts';
import * as productSchemas from './product.ts';

export const categoryVal = {
    get: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await categorySchemas.categorySearch.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await categorySchemas.categoryCreation.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);   
        }
    },
    update: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await categorySchemas.categoryUpdate.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await categorySchemas.categoryDeletion.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    }
}

export const productVal = {
    get: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await productSchemas.productSearch.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    list: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await productSchemas.productList.validate(req.params);
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
            req.body = await productSchemas.productDeletion.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    }
};

