import { Router } from 'express';
import { default as imageRouter } from "./image.ts";

const router = Router();

router.use("/image", imageRouter);

export default router;
