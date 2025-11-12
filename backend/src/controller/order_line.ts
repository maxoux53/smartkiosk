import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";
import {order_line} from "../generated/prisma/client.ts";

export const getOrderLine = async (req: Request, res: Response): Promise<void> => {
    try {
        const order_line = await prisma.order_line.findUnique({ 
            where: {
                // Prisma Composite Key 
                product_id_purchase_id: {
                    product_id: parseInt(req.params.product_id),
                    purchase_id: parseInt(req.params.purchase_id)
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