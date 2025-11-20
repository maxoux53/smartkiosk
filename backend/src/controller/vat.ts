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
            }
        });

        if (vats) {
            res.send(vats);
        } else {
            res.sendStatus(404);
        }
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
};
