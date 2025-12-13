import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";
import { order_line } from "../generated/prisma/client.ts";

export const getOrderLine = async (req: Request, res: Response): Promise<void> => {
    const { product_id, purchase_id } : order_line = req.body;

    try {
        const order_line = await prisma.order_line.findUnique({ 
            where: {
                product_id_purchase_id: { // Prisma Composite Key 
                    product_id,
                    purchase_id
                } 
            }
        });
        
        if (order_line) {
            res.send(order_line);
        } else {
            res.sendStatus(404);
        }
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const createOrderLine = async (req: Request, res: Response): Promise<void> => {
    const { product_id, purchase_id, quantity, price } : order_line = req.body;

    try {
        const newOrderLine = await prisma.order_line.create({
            data: {
                product_id,
                purchase_id,
                quantity,
                price
            },
            select: {
                product_id: true,
                purchase_id: true
            }
        })
        res.status(201).send(newOrderLine);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}
