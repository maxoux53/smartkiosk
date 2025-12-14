import { ValidationError } from '@vinejs/vine';
import { Request, Response, NextFunction } from 'express';
import * as categorySchemas from './category.ts';
import * as productSchemas from './product.ts';
import * as eventSchemas from './event.ts';
import * as membershipSchemas from './membership.ts';
import * as orderLineSchemas from './order_line.ts';
import * as purchaseSchemas from './purchase.ts';
import * as userSchemas from './user.ts';
import * as vatSchemas from './vat.ts';

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
            req.body = await productSchemas.productListByEvent.validate(req.params);
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

export const eventVal = {
    get: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await eventSchemas.eventSearch.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    list: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await eventSchemas.eventByUserList.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await eventSchemas.eventCreation.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    update: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await eventSchemas.eventUpdate.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await eventSchemas.eventDeletion.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    }
};

export const membershipVal = {
    get: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await membershipSchemas.membershipSearch.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await membershipSchemas.membershipCreation.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    update: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await membershipSchemas.membershipUpdate.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await membershipSchemas.membershipDeletion.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    }
};

export const orderLineVal = {
    get: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await orderLineSchemas.orderLineSearch.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await orderLineSchemas.orderLineCreation.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await orderLineSchemas.orderLineDeletion.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    }
};

export const purchaseVal = {
    get: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await purchaseSchemas.purchaseSearch.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    list: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await purchaseSchemas.purchaseListForUser.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await purchaseSchemas.purchaseCreation.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await purchaseSchemas.purchaseDeletion.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    }
};

export const userVal = {
    get: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await userSchemas.userSearch.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await userSchemas.userCreation.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    update: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await userSchemas.userUpdate.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await userSchemas.userDeletion.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    }
};

export const vatVal = {
    get: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await vatSchemas.vatSearch.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await vatSchemas.vatCreation.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    update: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await vatSchemas.vatUpdate.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    },
    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await vatSchemas.vatDeletion.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send((e as ValidationError).message);
        }
    }
};
