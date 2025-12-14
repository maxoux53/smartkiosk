import { Router } from 'express';
import { replaceProductPicture } from '../middleware/image-replacement.ts';
import {
    getProduct,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProductsOfAnEvent
} from "../controller/product.ts";

import { checkJWT, isAdmin } from "../middleware/identification.ts";
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
 *         $ref: '#/components/schemas/Product'
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

router.get('/', checkJWT, isAdmin, getAllProducts);

router.get('/:event_id', productVal.list, getAllProductsOfAnEvent);
/**
 * @swagger
 * /product:
 *   post:
 *     summary: Create a new product
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Product
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductToAdd'
 *     responses:
 *       201:
 *         $ref: '#/components/responses/ProductAdded'
 *       400:
 *         description: Described error
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       500:
 *         description: Server error
*/
router.post('/', checkJWT, productVal.create, createProduct);

/**
 * @swagger
 * /product:
 *   patch:
 *     summary: Update an existing product
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Product
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductToUpdate'
 *     responses:
 *       204:
 *         description: Product updated
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       400:
 *         description: Described error
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       500:
 *         description: Server error
*/
router.patch('/', checkJWT, isAdmin, productVal.update, replaceProductPicture, updateProduct);

/**
 * @swagger
 * /product/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Product
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the product to delete
 *     responses:
 *       204:
 *         description: Product deleted
 *       400:
 *         description: Described error
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       500:
 *         description: Server error
*/
router.delete('/:id', checkJWT, isAdmin, productVal.delete, deleteProduct);

export default router;
