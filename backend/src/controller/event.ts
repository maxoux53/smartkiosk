import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";

export const getEvent = async (req : Request, res : Response) : Promise<void> => {
    try {
        const event = await prisma.event.findUnique({
            where: {
                id: req.body.event_id
            },
            include: {
                product: true
            }
        });

        if (event) {
            res.status(200).send(event);
        } else {
            res.sendStatus(404);
        }
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const getAllEvents = async (req : Request, res : Response) : Promise<void> => {
    try {
        const events = await prisma.event.findMany({
            include: {
                product: true   
            }
        });

        res.status(200).send(events);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const getEventsByUser = async (req : Request, res : Response) : Promise<void> => {
    try {
         const events = await prisma.event.findMany({
            where: {
                membership: {
                    some: {
                        user_id: req.body.user_id,  
                        role: "host"
                    }
                }
            },
            include: {
                product: true
            }
        });

        res.status(200).send(events);
    } catch(e) {
        console.error(e)
        res.sendStatus(500)
    }
}

export const createEvent = async (req : Request, res : Response) : Promise<void> => {
    const { name, location, is_active, iban, image } = req.body;

    try {
        const newEvent = await prisma.event.create({
            data: {
                name,
                location,
                is_active,
                iban,
                image,
                membership: {
                    create: {
                        role: 'host',
                        user: {
                            connect: { id: req.session.id }
                        }
                    }
                }
            },
            select: {id: true}
        });

        res.status(201).send(newEvent);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const updateEvent = async (req : Request, res : Response) : Promise<void> => {
    const { id, name, location, is_active, iban, image } = req.body;

    try {
        await prisma.event.update({
            where: { id },
            data: {
                name,
                location,
                is_active,
                iban,
                image
            }
        });
        
        res.sendStatus(200);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const deleteEvent = async (req : Request, res : Response) : Promise<void> => {
    try {
        await prisma.product.updateMany({
            where: {
                event_id: req.body.event_id,
                deletion_date: null
            },
            data: {
                deletion_date: new Date()
            }
        })
        await prisma.event.delete({
            where: { 
                id: req.body.event_id
            }
        });
        res.sendStatus(200);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}
