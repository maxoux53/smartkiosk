import { Router } from "express";

import { default as productRouter } from "./product.ts";
import { default as categoryRouter } from "./category.ts";
import { default as eventRouter } from "./event.ts";
import { default as purchaseRouter } from "./purchase.ts";
import { default as userRouter } from "./user.ts";
import { default as vatRouter } from "./vat.ts";
import { default as personalRouter } from "./me.ts";

import { self, isAdmin } from "../middleware/identification.ts";

const router = Router();

router.use("/product", productRouter);
router.use("/category", categoryRouter);
router.use("/event", eventRouter);
router.use("/purchase", isAdmin, purchaseRouter);
router.use("/user", userRouter);
router.use("/vat", vatRouter);
router.use("/me", self, personalRouter);

export default router;
