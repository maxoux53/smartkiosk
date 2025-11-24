import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";
import { hash, compare} from "../util/hash.ts";
import { sign } from "../util/jwt.ts";

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
                email: true,
                is_admin: true
            }
        });

        if (user && (await compare(password, user.password_hash))) {
            const token = sign(
                { id: user.id, email: user.email, is_admin: user.is_admin },
                { expiresIn: '8h' }
            );

            res.status(200).send(token);
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
            }
        });

        if (user) {
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
        const users = await prisma.user.findMany();

        if (users) {
            res.status(200).send(users);
        } else {
            res.sendStatus(404);
        }
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
        const deletedUser = await prisma.user.delete({
            where: {
                id: req.body.id
            }
        });

        res.status(200).send(deletedUser);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const updateUser = async (req: Request, res: Response) : Promise<void> => {
    const { id, first_name, last_name, email, password, is_admin } = req.body;
    
    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                first_name,
                last_name,
                email,
                password_hash: await hash(password),
                is_admin
            }
        });

        res.status(200).send(updatedUser);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};
