import { Request, Response, NextFunction } from 'express';
import { eraseStoredImage } from '../images.ts';
import prisma from '../database/databaseORM.ts'
import { PrismaClientKnownRequestError } from '../generated/prisma/internal/prismaNamespace.ts';

export const replaceEventImage = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    if (req.body.image != undefined) {
        try {
            const event = await prisma.event.findUnique({
                where: {
                    id: req.body.id
                },
                select: {
                    image: true
                }
            });

            if (event?.image != null) {
                await eraseStoredImage(event.image);
            }
        } catch (e) {
            console.error(e);
            res.sendStatus((e as PrismaClientKnownRequestError).code === 'P2025' ? 404 : 500);
            return;
        }
    }
    
    next();
}

export const replaceUserAvatar = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    if (req.body.image != undefined) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: req.body.id
                },
                select: {
                    avatar: true
                }
            });

            if (user?.avatar != null) {
                await eraseStoredImage(user.avatar);
            }
        } catch (e) {
            console.error(e);
            res.sendStatus((e as PrismaClientKnownRequestError).code === 'P2025' ? 404 : 500);
            return;
        }
    }

    next();
}

export const replaceProductPicture = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    if (req.body.picture != undefined) {
        try {
            const product = await prisma.product.findUnique({
                where: {
                    id: req.body.id
                },
                select: {
                    picture: true
                }
            });

            if (product?.picture != null) {
                await eraseStoredImage(product.picture);
            }
        } catch (e) {
            console.error(e);
            res.sendStatus((e as PrismaClientKnownRequestError).code === 'P2025' ? 404 : 500);
            return;
        }
    }

    next();
}

export const replaceCategoryPicture = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    if (req.body.picture != undefined) {
        try {
            const category = await prisma.category.findUnique({
                where: {
                    id: req.body.id
                },
                select: {
                    picture: true
                }
            });

            await eraseStoredImage(category!.picture);
        } catch (e) {
            console.error(e);
            res.sendStatus((e as PrismaClientKnownRequestError).code === 'P2025' ? 404 : 500);
            return;
        }
    }

    next();
}
