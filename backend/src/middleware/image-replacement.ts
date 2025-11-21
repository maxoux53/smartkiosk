import { Request, Response, NextFunction } from 'express';
import { eraseStoredImage } from '../images.ts';
import prisma from '../database/databaseORM.ts'

export const replaceEventImage = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    const event = await prisma.event.findUnique({
        where: {
            id: req.body.id
        },
        select: {
            image: true
        }
    });

    if (!event) {
        return res.sendStatus(404);
    }

    if (event.image != null) {
        await eraseStoredImage(event.image);
    }

    next();
}

export const replaceUserAvatar = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.body.id
        },
        select: {
            avatar: true
        }
    });

    if (!user) {
        return res.sendStatus(404);
    }

    if (user.avatar != null) {
        await eraseStoredImage(user.avatar);
    }

    next();
}

export const replaceProductPicture = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    const product = await prisma.product.findUnique({
        where: {
            id: req.body.id
        },
        select: {
            picture: true
        }
    });

    if (!product) {
        return res.sendStatus(404);
    }

    if (product.picture != null) {
        await eraseStoredImage(product.picture);
    }

    next();
}

export const replaceCategoryPicture = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    const category = await prisma.category.findUnique({
        where: {
            id: req.body.id
        },
        select: {
            picture: true
        }
    });

    if (!category) {
        return res.sendStatus(404);
    }

    await eraseStoredImage(category.picture);

    next();
}
