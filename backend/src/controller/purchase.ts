import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";
import { purchase } from "../generated/prisma/client.ts";

export const getPurchase = async (req: Request, res: Response): Promise<void> => {
    try {
        const purchase = await prisma.purchase.findUnique({
            where: {
                id: req.body.id,
            },
            include: {
                order_line: true
            }
        });

        if (purchase) {
            res.send(purchase);
        } else {
            res.sendStatus(404);
        }
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const createPurchase = async (req: Request, res: Response): Promise<void> => {
    const { id, user_id, date } : purchase = req.body;
    

}


