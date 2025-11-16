import { Request, Response, NextFunction } from 'express';

export const identificationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // DEV DEMO ONLY !!
    req.userId = 1;
    next();
}
