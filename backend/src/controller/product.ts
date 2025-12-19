import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";
import { LAZY_LOADING_PAGE_DEFAULT_SIZE } from "../../../shared/constraint.constants.ts";

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
            select: {
                id: true,
                label: true,
                is_available: true,
                excl_vat_price: true,
                picture: true,
                event_id: true,
                category: {
                    select: {
                        label: true,
                        vat:{
                            select: {
                                rate: true
                            }
                        }
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
        const limit = req.body.limit || LAZY_LOADING_PAGE_DEFAULT_SIZE;
        const { cursor, search } = req.body;

        const results = await prisma.product.findMany({
            where: {
                deletion_date: null,
                ...(search
                    ? {
                          label: {
                              contains: search,
                              mode: 'insensitive'
                          }
                      }
                    : {})
            },
            orderBy: {
                id: 'asc'
            },
            take: limit + 1,
            ...(cursor
                ? {
                      cursor: { id: cursor },
                      skip: 1
                  }
                : {}),
            select: {
                id: true,
                label: true,
                is_available: true,
                excl_vat_price: true,
                picture: true,
                event_id: true,
                category: {
                    select: {
                        id: true,
                        vat: {
                            select: {
                                type: true
                            }
                        }
                    }
                }
            }
        });

        if (!results) {
            res.sendStatus(404);
            return;
        }

        const hasNextPage = results.length > limit;
        const items = results.slice(0, limit);
        const nextCursor = hasNextPage ? items[items.length - 1]?.id ?? null : null;

        res.status(200).send({
            items,
            pageInfo: {
                nextCursor,
                hasNextPage
            }
        });
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

// Unavailable products are shown but disabled on the frontend
export const getProductsByEvent = async (req : Request, res : Response) : Promise<void> => {
    try {
        const products = await prisma.product.findMany({
            where: {
                deletion_date: null,
                event_id: req.body.event_id
            },
            select: {
                label: true,
                is_available: true,
                excl_vat_price: true,
                picture: true,
                category: {
                    select: {
                        label: true,
                        vat:{
                            select: {
                                type: true,
                                rate: true
                            }
                        }
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

// export const getAvailableProductsByEvent = async (req : Request, res : Response) : Promise<void> => {
//     try {
//         const products = await prisma.product.findMany({
//             where: {
//                 deletion_date: null,
//                 event_id: req.body.event_id,
//                 is_available: true
//             },
//             select: {
//                 label: true,
//                 excl_vat_price: true,
//                 picture: true,
//                 category: {
//                     select: {
//                         label: true,
//                         vat:{
//                             select: {
//                                 rate: true
//                             }
//                         }
//                     }
//                 }
//             }
//         });
//         res.status(200).send(products);
//     } catch (e) {
//         console.error(e);
//         res.sendStatus(500);
//     }
// };

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
            res.status(404).send("Category not found");
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
    const { id, label, is_available, excl_vat_price, deletion_date, picture, category_id } = req.body;
    
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
                category_id
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