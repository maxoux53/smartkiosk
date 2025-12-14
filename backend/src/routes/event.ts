import { Router } from 'express';
import { replaceEventImage } from '../middleware/image-replacement.ts';
import {
    getEvent,
    getAllEvents,
    getAllEventsByUser,
    createEvent,
    updateEvent,
    deleteEvent
} from "../controller/event.ts";
import { eventVal, userVal } from '../middleware/validation/validator.ts';

const router = Router();

router.get('/:id', eventVal.get, getEvent);
router.get('/', getAllEvents);
router.get('/user_id', eventVal.list, getAllEventsByUser);
router.post('/', eventVal.create, createEvent);
router.patch('/', eventVal.update, replaceEventImage, updateEvent);
router.delete('/:id', eventVal.delete, deleteEvent);

export default router;
