import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";
import { hash, compare} from "../util/hash.ts";
import { sign } from "../util/jwt.ts";
import { PrismaClientKnownRequestError } from "../generated/prisma/internal/prismaNamespace.ts";
import { eraseStoredImage } from '../util/images.ts';

export const login = async (req: Request, res: Response) : Promise<void> => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            },
            select: {
                id: true,
                password_hash: true,
                is_admin: true
            }
        });

        if (user && (await compare(password, user.password_hash))) {
            res.status(200).send({
                token: sign(
                    { id: user.id, isAdmin: user.is_admin },
                    { expiresIn: '8h' }
                ),
                user: {id: user.id, is_admin: user.is_admin}
            });
        } else {
            res.sendStatus(401);
        }
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: req.body.id,
                deletion_date: null
            },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                avatar: true
            }
        });

        if (user) {
            if (user.avatar) {
                user.avatar = `https://imagedelivery.net/${process.env.CF_ACCOUNT_HASH}/${user.avatar}/public`;
            }

            res.status(200).send(user);
        } else {
            res.sendStatus(404);
        }
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const getAllUsers = async (req: Request, res: Response) : Promise<void> => {
    try {
        const limit: number = req.body.limit ?? 20;
        const cursor: number | undefined = req.body.cursor;
        const search: string | undefined = req.body.search;

        const results = await prisma.user.findMany({
            where: {
                deletion_date: null,
                ...(search
                    ? {
                          first_name: {
                              contains: search,
                              mode: 'insensitive'
                          }
                      }
                    : {})
            },
            orderBy: {
                id: 'asc'
            },
            take: limit + 1,
            ...(cursor
                ? {
                      cursor: { id: cursor },
                      skip: 1
                  }
                : {}),
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                avatar: true
            }
        });

        const hasNextPage = results.length > limit;
        const items = results.slice(0, limit);

        for (const iUser in items) {
            if (items[iUser].avatar) {
                items[iUser].avatar = `https://imagedelivery.net/${process.env.CF_ACCOUNT_HASH}/${items[iUser].avatar}/public`;
            }
        }

        const nextCursor = hasNextPage ? items[items.length - 1]?.id ?? null : null;

        res.status(200).send({
            items,
            pageInfo: {
                nextCursor,
                hasNextPage
            }
        });
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const createUser = async (req: Request, res: Response) : Promise<void> => {
    const { first_name, last_name, email, password, is_admin } = req.body;
    
    try {
        const newUser = await prisma.user.create({
            data: {
                first_name,
                last_name,
                email,
                password_hash: await hash(password),
                is_admin
            },
            select: {
                id: true
            }
        });

        res.status(201).send(newUser);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const deleteUser = async (req: Request, res: Response) : Promise<void> => {
    try {
        const user = await prisma.user.update({
            where: {
                id: req.body.id,
                deletion_date: null
            },
            data: {
                deletion_date: new Date()
            },
            select: {
                avatar: true
            }
        });

        if (user.avatar) {
            await eraseStoredImage(user.avatar);
        }

        res.sendStatus(200);
    } catch (e) {
        console.error(e);
        res.sendStatus((e as PrismaClientKnownRequestError).code === 'P2025' ? 404 : 500);
    }
};

export const updateUser = async (req: Request, res: Response) : Promise<void> => {
    const { id, first_name, last_name, email, is_admin, avatar } = req.body;
    const password_hash = (req.body.password ? await hash(req.body.password) : undefined);
    
    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                first_name,
                last_name,
                email,
                password_hash,
                is_admin,
                avatar
            },
        });

        res.sendStatus(200);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};
