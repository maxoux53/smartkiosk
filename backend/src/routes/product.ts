import { Router } from 'express';

import {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controller/product.ts";

import { productVal } from '../middleware/validation/validator.ts';

const router = Router();

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags:
 *       - Product
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the product to get
 *     responses:
 *       200:
 *         description: Product found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid ID supplied
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       404:
 *         description: Product not found
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       500:
 *         description: Server error
 */
router.get('/:id', productVal.get, getProduct);
router.post('/', productVal.create, createProduct);
router.patch('/', productVal.update, updateProduct);
router.delete('/:id', productVal.delete, deleteProduct);

export default router;
