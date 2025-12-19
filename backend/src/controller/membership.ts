import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";

export const getMembership = async (req : Request, res : Response) : Promise<void> => {
    const { user_id, event_id } = req.body;
    try {
        const membership = await prisma.membership.findUnique({
            where: {
                user_id_event_id: {
                    user_id,
                    event_id
                }
            }
        });

        if (membership) {
            res.status(200).send(membership);
        } else {
            res.sendStatus(404);
        }   
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const createMembership = async (req : Request, res : Response) : Promise<void> => {
    const { user_email, event_id } = req.body;

    try {
        const user_id = (await prisma.user.findUnique({
            where: {
                email: user_email
            },
            select: {
                id: true
            }
        }))?.id;

        if (!user_id) {
            res.status(404).send("User not found");
            return;
        }

        await prisma.membership.create({
            data: {
                user_id,
                event_id,
                role: "cashier"
            }
        });
        
        res.sendStatus(201);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const joinEvent = async (req : Request, res : Response) : Promise<void> => {
    const { event_id } = req.body;

    try {
        await prisma.membership.create({
            data: {
                user_id : req.session.id,
                event_id
            }
        });
        
        res.sendStatus(201);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const updateMembership = async (req : Request, res : Response) : Promise<void> => {
    const { user_id, event_id, role } = req.body;

    try {
        await prisma.membership.update({
            where: {
                user_id_event_id: {
                    user_id,
                    event_id
                }
            },
            data: {
                role
            }
        });

        res.sendStatus(200);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const deleteMembership = async (req : Request, res : Response) : Promise<void> => {
    const { event_id } = req.body;

    try {
        await prisma.membership.delete({
            where: {
                user_id_event_id: {
                    user_id: req.session.id,
                    event_id
                }
            }
        });

        res.sendStatus(204);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}
