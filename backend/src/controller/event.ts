import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";
import { LAZY_LOADING_PAGE_DEFAULT_SIZE } from "../../../shared/constraint.constants.ts";

export const getEvent = async (req : Request, res : Response) : Promise<void> => {
    try {
        const event = await prisma.event.findUnique({
            where: {
                id: req.body.event_id
            },
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
        const limit = req.body.limit || LAZY_LOADING_PAGE_DEFAULT_SIZE;
        const { cursor, search } = req.body;

        const results = await prisma.event.findMany({
            where: {
                ...(search
                    ? {
                          name: {
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
                : {})
        });

        if (results.length === 0) {
            res.sendStatus(404);
            return;
        }

        const hasNextPage = results.length > limit;
        const items = results.slice(0, limit);
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
}

export const getEventsByUser = async (req : Request, res : Response) : Promise<void> => {
    try {
         const events = await prisma.event.findMany({
            where: {
                membership: {
                    some: {
                        user_id: req.session.id,  
                        role: {
                            in: ['host', 'cashier']
                        }
                    }
                }
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
                    // Nested write transaction
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
        await prisma.$transaction([
            prisma.product.updateMany({
                where: {
                    event_id: req.body.event_id,
                    deletion_date: null
                },
                data: {
                    deletion_date: new Date()
                }
            }),
            prisma.event.delete({
                where: { 
                    id: req.body.event_id
                }
            })
        ])
        res.sendStatus(200);
        
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}
