import { Router } from 'express';

import { identificationMiddleware } from '../middleware/identification.ts';

import {
    avatarUploadAddress
} from "../controller/image.ts";

const router = Router();

router.get('/', identificationMiddleware, avatarUploadAddress);

export default router;
