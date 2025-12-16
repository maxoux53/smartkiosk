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
                order_line: {
                    select: {
                        product_id: true,
                        quantity: true,
                        price: true
                    }
                }
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

export const getAllPurchases = async (req : Request, res :Response) : Promise<void> => {
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

export const getPurchasesByUser = async (req : Request, res :Response) : Promise<void> => {
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
    try {
        const newPurchase = await prisma.purchase.create({
            data: {
                user_id : req.body.id,
                date: new Date()
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
