import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";

export const getVat = async (req : Request, res : Response) : Promise<void> => {
    try {
        const vat = await prisma.vat.findUnique({
            where: {
                type: req.params.id,
                deletion_date: null
            }
        });

        if (vat) {
            res.send(vat);
        } else {
            res.sendStatus(404);
        }
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const getAllVats = async (req : Request, res : Response) : Promise<void> => {
    try {
        const vats = await prisma.vat.findMany({
            where: {
                deletion_date: null
            },
            select: {
                type: true,
                rate: true
            }
        });
        res.sendStatus(404);
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const createVat = async (req : Request, res : Response) : Promise<void> => {
    try {
        const newVat = await prisma.vat.create({
            data: {
                type: req.body.type,
                rate: req.body.rate
            }
        })
        res.status(201).send(newVat);
        
        // Erreur pas claire si type deja existant 
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const updateVat = async (req : Request, res : Response) : Promise<void> => {
    try {
        await prisma.vat.update({
            where: {
                type: req.body.type
            },
            data: {
                rate: req.body.rate
            }
        })
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const deleteVat = async (req : Request, res : Response) : Promise<void> => {
    try {
        await prisma.vat.update({
            where: {
                type: req.body.type
            },
            data: {
                deletion_date: new Date()
            }
        })
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
}