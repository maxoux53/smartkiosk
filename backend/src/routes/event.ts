import { Router } from 'express';

import {
    getEvent,
    getAllEvents,
    createEvent,
    updateEvent,
    deleteEvent
} from "../controller/event.ts";
import { createProduct, getProductsByEvent } from '../controller/product.ts';

import { productVal } from '../middleware/validation/validator.ts';
import { replaceEventImage } from '../middleware/image-replacement.ts';
import { isAdmin, isHost } from "../middleware/identification.ts";
import { eventVal } from '../middleware/validation/validator.ts';

const router = Router();

router.get('/:id', eventVal.get, getEvent);
router.get('/', isAdmin, getAllEvents);
router.post('/', eventVal.create, createEvent);
router.patch('/', eventVal.update, isHost, replaceEventImage, updateEvent);
router.delete('/:id', eventVal.delete, isHost, deleteEvent);

router.get('/:event_id/products', productVal.getByEvent, getProductsByEvent);
router.post('/:event_id/product', productVal.create, createProduct);

export default router;
