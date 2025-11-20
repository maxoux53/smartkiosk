import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";
import { event } from "../generated/prisma/client.ts";

export const getEvent = async (req : Request, res : Response) : Promise<void> => {
    try {
        const event = await prisma.event.findUnique({
            where: {id: req.body.id}
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
        res.status(200).send(await prisma.event.findMany());
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const createEvent = async (req : Request, res : Response) : Promise<void> => {
    const { name, location, is_active, iban, image } : event = req.body;

    try {
        const newEvent = await prisma.event.create({
            data: {
                name,
                location,
                is_active,
                iban,
                image
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
    const { id, name, location, is_active, iban, image } : event = req.body;

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
        await prisma.event.delete({
            where: { id: req.body.id }
        });
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}
