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

export const getAllPurchase = async (req : Request, res :Response) : Promise<void> => {
    try {
        const purchases = await prisma.purchase.findMany({
            include: {
                order_line: {
                    include: {
                        product: {
                            select: {
                                label: true
                            }
                        }
                    }
                }
            }
        }); 
        res.status(200).send(purchases);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const getAllPurchaseOfUser = async (req : Request, res :Response) : Promise<void> => {
    try {
        const purchases = await prisma.purchase.findMany({
            where: {
                user_id: req.body.id
            },
            include: {  
                order_line: {
                    include: {
                        product: {
                            select: {
                                label: true
                            }
                        }
                    }
                }
            }
        })
        res.status(200).send(purchases);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const createPurchase = async (req: Request, res: Response): Promise<void> => {
    const { id, user_id, date } : purchase = req.body;
    try {
        const newPurchase = await prisma.purchase.create({
            data: {
                user_id,
                date
            },
            select: {
                id: true
            }
        })
        res.status(201).send(newPurchase);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const deletePurchase = async (req: Request, res: Response) : Promise<void> => {
    try {
        await prisma.purchase.delete({
            where: {
                id: req.body.id
            }
        });

        res.sendStatus(200);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}
