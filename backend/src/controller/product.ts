import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";
import { product } from "../generated/prisma/client.ts";

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         label:
 *           type: string
 *         is_available:
 *           type: boolean
 *         excl_vat_price:
 *           type: number
 *         deletion_date:
 *           type: string
 *           format: date-time
 *         category_id:
 *           type: integer
 *         event_id:
 *           type: integer
*/



/**
 * @swagger
 * components:
 *   responses:
 *     getProduct:
 *       description: The product
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
*/
export const getProduct = async (req : Request, res : Response) : Promise<void> => {
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: req.body.id,
                deletion_date: null
            }
        });

        if (product) {
            res.status(200).send(product);
        } else {
            res.sendStatus(404);
        }
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const getAllProducts = async (req : Request, res : Response) : Promise<void> => {
    try {
        let products;
        if (req.body.event_id) {
            products = await prisma.product.findMany({ where: { deletion_date: null, event_id: req.body.event_id } });
        } else {
            products = await prisma.product.findMany({ where: { deletion_date: null } });
        }
        res.status(200).send(products);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

/**
 * @swagger
 * components:
 *   responses:
 *     ProductAdded:
 *       description: The product
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
*/
export const createProduct = async (req : Request, res : Response) : Promise<void> => {
    try {
        /* possibilité 1
        const { label, is_available, excl_vat_price, deletion_date, picture, category_id, event_id } : product = req.body;

        const newProductId : { id : number} = await prisma.product.create({
            data: {
                label,
                is_available,
                excl_vat_price,
                deletion_date,
                picture,
                category_id,
                event_id
            },
            select: {
                id: true
            }
        }); */

        // possibilité 2
        const newProductId : { id : number} = await prisma.product.create({
            data: {
                label: req.body.label,
                is_available: req.body.is_available,
                excl_vat_price: req.body.excl_vat_price,
                deletion_date: req.body.deletion_date,
                picture: req.body.picture,
                category_id: req.body.category_id,
                event_id: req.body.event_id
            },
            select: {
                id: true
            }
        });
        
        res.status(201).send(newProductId);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const updateProduct = async (req : Request, res : Response) : Promise<void> => {
    const { id, label, is_available, excl_vat_price, deletion_date, picture, category_id, event_id } : product = req.body;
    // const safeExclVatPriceDecimal = new prisma.Decimal(excl_vat_price);
    
    try {
        await prisma.product.update({
            where: {
                id
            },
            data: {
                label,
                is_available,
                excl_vat_price,
                deletion_date,
                picture,
                category_id,
                event_id
            }
        });

        res.sendStatus(200);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const deleteProduct = async (req : Request, res : Response) : Promise<void> => {
    try {
        await prisma.product.delete({
            where: {
                id: req.body.id
            }
        });

        res.sendStatus(204);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }  
};
