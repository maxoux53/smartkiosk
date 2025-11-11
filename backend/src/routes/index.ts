import { Router, type Request, type Response } from "express";
import { default as productRouter } from "./product.ts";

const router = Router();

router.use("/product", productRouter);

// Gestion d'une URL hors application
router.use((req : Request, res : Response) : Response => {
    console.error(`Bad URL: ${req.path}`);
    return res.status(404).send("Il ne s'agit pas d'une URL prise en charge par l'application");
});

export default router;
