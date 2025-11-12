import { Router, type Request, type Response } from "express";
import { default as productRouter } from "./product.ts";
import { default as categoryRouter } from "./category.ts";
import { default as eventRouter } from "./event.ts";
import { default as imageRouter } from "./image.ts";
import { default as purchaseRouter } from "./purchase.ts";
import { default as userRouter } from "./user.ts";
import { default as vatRouter } from "./vat.ts";

const router = Router();

router.use("/product", productRouter);
router.use("/category", categoryRouter);
router.use("/event", eventRouter);
router.use("/image", imageRouter);
router.use("/purchase", purchaseRouter);
router.use("/user", userRouter);
router.use("/vat", vatRouter);

// Gestion d'une URL hors application
router.use((req : Request, res : Response) : Response => {
    console.error(`Bad URL: ${req.path}`);
    return res.status(404).send("Il ne s'agit pas d'une URL prise en charge par l'application");
});

export default router;
