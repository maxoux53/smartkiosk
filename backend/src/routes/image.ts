import { Router } from 'express';
import { upload } from '../controller/image.ts';

const router = Router();

router.get('/upload', upload);

export default router;
