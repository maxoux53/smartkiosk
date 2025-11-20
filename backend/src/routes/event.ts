import { Router } from 'express';
import { replaceEventImage } from '../middleware/image-replacement.ts';
import {
    getEvent,
    getAllEvents,
    createEvent,
    updateEvent,
    deleteEvent
} from "../controller/event.ts";

const router = Router();

router.get('/:id', getEvent);
router.get('/', getAllEvents);
router.post('/', createEvent);
router.patch('/', replaceEventImage, updateEvent);
router.delete('/:id', deleteEvent);

export default router;
