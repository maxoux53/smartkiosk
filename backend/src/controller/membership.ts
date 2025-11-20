import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";
import { membership } from "../generated/prisma/client.ts";

export const getMembership = async (req : Request, res : Response) : Promise<void> => {
    const { user_id, event_id } : membership = req.body;
    try {
        const membership = await prisma.membership.findFirst({
            where: {
                user_id,
                event_id
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
    const { user_id, event_id, role } : membership = req.body;

    try {
        const newMembership = await prisma.membership.create({
            data: {
                user_id,
                event_id,
                role // checked by validator
            },
            select: {
                user_id: true,
                event_id: true
            }
        });
        
        res.status(201).send(newMembership);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const updateMembership = async (req : Request, res : Response) : Promise<void> => {
    const { user_id, event_id, role } : membership = req.body;

    try {
        await prisma.membership.update({
            where: {
                user_id_event_id: {
                    user_id,
                    event_id
                }
            },
            data: {
                role // checked by validator    
            }
        });

        res.sendStatus(200);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const deleteMembership = async (req : Request, res : Response) : Promise<void> => {
    const { user_id, event_id } : membership = req.body;

    try {
        await prisma.membership.delete({
            where: {
                user_id_event_id: {
                    user_id,
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
