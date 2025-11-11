import prisma from "../database/databaseORM.js";
import { Request, Response } from "express";

export const getProduct = async (req : Request, res : Response) : Promise<void> => {
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        });
        if(product){
            res.send(product);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};
