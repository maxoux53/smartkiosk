import { Router } from 'express';

import {
    avatarUploadAddress
} from "../controller/image.ts";

const router = Router();

router.get('/image', avatarUploadAddress);

export default router;
