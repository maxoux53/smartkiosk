import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";
import { Decimal } from "@prisma/client/runtime/library";

export const getOrderLine = async (req: Request, res: Response): Promise<void> => {
    const { product_id, purchase_id } = req.body;

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
            res.status(200).send(order_line);
        } else {
            res.sendStatus(404);
        }
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

// export const createOrderLine = async (req: Request, res: Response): Promise<void> => {
//     const { product_id, purchase_id, quantity } = req.body;

//     const product = await prisma.product.findUnique({
//         where: {
//             id: product_id
//         },
//         select: {
//             excl_vat_price: true,
//             category: {
//                 select: {
//                     vat: {
//                         select: {
//                             rate:true
//                         }
//                     }
//                 }
//             }
//         }
//     });

//     if (!product) {
//         res.sendStatus(400);
//         return;
//     }

//     const totalPrice = ((new Decimal(quantity).mul(product.excl_vat_price).mul(new Decimal(1).plus(product.category.vat.rate / 100)))).toDecimalPlaces(2);

//     try {
//         const newOrderLine = await prisma.order_line.create({
//             data: {
//                 product_id,
//                 purchase_id,
//                 quantity,
//                 price: totalPrice
//             },
//             select: {
//                 product_id: true,
//                 purchase_id: true
//             }
//         })
//         res.status(201).send(newOrderLine);
//     } catch (e) {
//         console.error(e);
//         res.sendStatus(500);
//     }
// }
