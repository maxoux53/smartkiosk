import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";

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
            },
            include: {
                category: {
                    include: {
                        vat: true
                    }
                }
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
        const products = await prisma.product.findMany({
            where: {
                deletion_date: null
            },
            include: {
                category: {
                    include: {
                        vat: true
                    }
                }
            }
        });

        res.status(200).send(products);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const getProductsByEvent = async (req : Request, res : Response) : Promise<void> => {
    try {
        const products = await prisma.product.findMany({
            where: {
                deletion_date: null,
                event_id: req.body.event_id
            },
            include: {
                category: {
                    include: {
                        vat: true
                    }
                }
            }
        });
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
        const { label, is_available, excl_vat_price, picture, category_id, event_id } = req.body;

        const category = await prisma.category.findUnique({
            where: {
                id: category_id
            },
            select: {
                picture: true
            }
        });

        if (!category) {
            res.sendStatus(400);
            return;
        }
        
        const productPicture = picture || category.picture;
        
        const newProductId = await prisma.product.create({
            data: {
                label,
                is_available,
                excl_vat_price,
                picture: productPicture,
                category_id,
                event_id
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
    const { id, label, is_available, excl_vat_price, deletion_date, picture, category_id, event_id } = req.body;
    
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
        await prisma.product.update({
            where: {
                id: req.body.id
            },
            data: {
                deletion_date: new Date()
            }
        });

        res.sendStatus(204);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }  
};