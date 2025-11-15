import { Router } from 'express';
import {
    avatarUploadAddress
} from "../controller/image.ts";
const router = Router();

router.get('/', avatarUploadAddress);

export default router;
